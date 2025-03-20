using Matrimonial.BaseServices.Models.Identity;
using Matrimonial.Contracts.IdentityServices;
using Matrimonial.DOM.Identity;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Matrimonial.BaseServices.Exceptions;
using Microsoft.Extensions.Configuration;
using Microsoft.EntityFrameworkCore;
using Serilog;

namespace Matrimonial.BAL.Service
{
    public class AuthService : IAuthService
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly JwtSettings _jwtSettings;
        private readonly IConfiguration _configuration;

        public AuthService(UserManager<ApplicationUser> userManager,
            IOptions<JwtSettings> jwtSettings,
            SignInManager<ApplicationUser> signInManager
            ,IConfiguration configuration)
        {
            _userManager = userManager;
            _jwtSettings = jwtSettings.Value;
            _signInManager = signInManager;
            _configuration = configuration;
        }

        public async Task<RegistrationResponse> Register(RegistrationRequest request)
        {
            Log.Information("User Registration Attempt: {Email} {UserName} {Phone}", request.Email, request.UserName, request.Phone);

            var user = new ApplicationUser
            {
                FirstName = request.FirstName,
                LastName = request.LastName,
                Email = request.Email,
                NormalizedEmail = request.Email.ToUpper(),
                EmailConfirmed = false,
                UserName = request.UserName,
                NormalizedUserName = request.UserName.ToUpper(),
                PhoneNumber=request.Phone
            };
            if(!string.IsNullOrEmpty(request.Phone))
            {
                user.PhoneNumber = request.Phone;
            }
            if (await _userManager.FindByEmailAsync(request.Email) != null)
            {
                Log.Warning("Registration failed. Email already exists: {0}", request.Email);
                throw new BadRequestException($"Registration failed. Email already exists: {request.Email}");
            }
            var result = await _userManager.CreateAsync(user, request.Password);

            if (result.Succeeded)
            {
                Log.Information("Add role to User:{UserName}",request.UserName);
                await _userManager.AddToRoleAsync(user, "User");
                Log.Information("Added User:{UserName} in Role :User", request.UserName);
                // Assign Claims
                var claims = new List<Claim>
                {
                    new Claim(ClaimTypes.Name, user.FirstName+" "+user.LastName),
                    new Claim(ClaimTypes.Email, user.Email),
                    new Claim(ClaimTypes.Role, "User"),
                    new Claim("Permission", "CanViewProfiles") // Custom claim
                };
                Log.Information("Add Claims(ViewProfiles) to User:{UserName}", request.UserName);
                await _userManager.AddClaimsAsync(user, claims);
                Log.Information("Added User:{UserName} in Claim :ViewProfiles", request.UserName);
                Log.Information("User Registered Successfully: {UserName}", user.UserName);
                return new RegistrationResponse() { message = "User registered successfully.", UserId = user.Id  };
            }
            else
            {
                StringBuilder str = new StringBuilder();
                foreach (var err in result.Errors)
                {
                    str.AppendFormat("•{0}\n", err.Description);
                }

                Log.Error($"{str}");
                throw new BadRequestException($"{str}");
            }
        }
        public async Task<AuthResponse> Login(AuthRequest request)
        {
            var user = await GetUserByEmailOrPhoneOrUsername(request.Email);
            if (user == null)
            {
                Log.Error($"User with identifier {request.Email} not found.", request.Email);
                throw new NotFoundException($"User with identifier {request.Email} not found.", request.Email);
            }

            var result = await _signInManager.CheckPasswordSignInAsync(user, request.Password, false);

            if (result.Succeeded == false)
            {
                Log.Error($"Credentials for '{request.Email} aren't valid'.");
                throw new BadRequestException($"Credentials for '{request.Email} aren't valid'.");
            }
            var roles = await _userManager.GetRolesAsync(user);
            JwtSecurityToken jwtSecurityToken = await GenerateToken(user, roles);

            var response = new AuthResponse
            {
                Id = user.Id,
                Token = new JwtSecurityTokenHandler().WriteToken(jwtSecurityToken),
                Email = user.Email,
                UserName = user.UserName,
                Roles = roles.FirstOrDefault()
            };

            return response;
        }
        private async Task<JwtSecurityToken> GenerateToken(ApplicationUser user, IList<string> roles)
        {
            Log.Information("Generate Token for User:{UserName}", user.UserName);
            var userClaims = await _userManager.GetClaimsAsync(user);

            var roleClaims = roles.Select(q => new Claim(ClaimTypes.Role, q)).ToList();
            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Sub, user.UserName),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(ClaimTypes.NameIdentifier, user.Id),
                new Claim(ClaimTypes.Name, user.FirstName+" "+user.LastName),
                new Claim(ClaimTypes.Email, user.Email),
                new Claim("uid", user.Id),
                new Claim("role", roles.FirstOrDefault()),
                new Claim("Claims", string.Join(",", userClaims.Select(x => x.Value))),
            }.Union(userClaims).Union(roleClaims);

            // Add claims from Identity
            //claims.AddRange(userClaims);

            var symmetricSecurityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_jwtSettings.Key));

            var signingCredentials = new SigningCredentials(symmetricSecurityKey, SecurityAlgorithms.HmacSha256);

            var jwtSecurityToken = new JwtSecurityToken(
               issuer: _jwtSettings.Issuer,
               audience: _jwtSettings.Audience,
               claims: claims,
               expires: DateTime.Now.AddMinutes(_jwtSettings.DurationInMinutes),
               signingCredentials: signingCredentials);
            Log.Information("Token Generated", user.UserName, jwtSecurityToken);
            return jwtSecurityToken;
        }
        
        //add method to get user by email or phone or username
        public async Task<ApplicationUser> GetUserByEmailOrPhoneOrUsername(string identifier)
        {
            var user = await _userManager.FindByEmailAsync(identifier);
            if (user == null)
            {
                user = await _userManager.FindByNameAsync(identifier);
            }
            if (user == null)
            {
                user = await _userManager.Users.FirstOrDefaultAsync(u => u.PhoneNumber == identifier);
            }
            return user;
        }

    }
}

