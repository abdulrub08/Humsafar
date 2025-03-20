using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Matrimonial.Contracts.IdentityServices;
using Microsoft.AspNetCore.Http;
using System.Security.Claims;
using Matrimonial.BaseServices.Models.Identity;
using Matrimonial.DOM.Identity;

namespace Matrimonial.BAL.Service
{
    public class UserDetails : IUserDetails
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly IHttpContextAccessor _contextAccessor;
        private readonly MatrimonialDbContext _context;
        public UserDetails(UserManager<ApplicationUser> userManager, RoleManager<IdentityRole> roleManager,
            MatrimonialDbContext context, IHttpContextAccessor contextAccessor)
        {
            _userManager = userManager;
            _roleManager = roleManager;
            _context = context;
            _contextAccessor = contextAccessor;
        }
        public string UserId { get => _contextAccessor.HttpContext?.User?.FindFirstValue("uid"); }
        public async Task<IList<string>> GetUserRoles(ApplicationUser user)
        {
            return await _userManager.GetRolesAsync(user);
        }
        public async Task<List<string?>> GetAllRoles()
        {
            return await _roleManager.Roles.Select(x => x.Name).ToListAsync();
        }

        public async Task<(bool, string)> SetUserRoles(ApplicationUser user, string role)
        {
            // Assuming _userManager and model are defined elsewhere in the class
            var roleExists = await _roleManager.RoleExistsAsync(role);
            if (!roleExists)
            {
                return (false, "Role does not exist");
            }
            // Assign the role to the user
            var roleResult = await _userManager.AddToRoleAsync(user, role);
            if (!roleResult.Succeeded)
            {
                return (false, string.Join(", ", roleResult.Errors.Select(e => e.Description)));
            }
            return (true, "Role assigned successfully");
        }
        /// <summary>
        /// Retrieves a user based on the provided identifier, which can be a user ID, email, phone number, or username.
        /// </summary>
        /// <param name="user_id_email_phone_username">The identifier for the user, which can be a user ID, email, phone number, or username.</param>
        /// <returns>A task that represents the asynchronous operation. The task result contains the user object.</returns>
        public async Task<User> GetUser(string user_id_email_phone_username)
        {
            var _user = await _userManager.FindByEmailAsync(user_id_email_phone_username);
            if(_user == null)
            {
                _user = await _userManager.FindByIdAsync(user_id_email_phone_username);
            }
            if (_user == null)
            {
                _user = await _userManager.FindByNameAsync(user_id_email_phone_username);
            }
            if (_user == null)
            {
                _user = await _userManager.Users.FirstOrDefaultAsync(u => u.PhoneNumber == user_id_email_phone_username);
            }
            return new User
            {
                Email = _user.Email,
                FirstName = _user.FirstName,
                LastName = _user.LastName
            };
        }

        public async Task<List<User>> GetUsers()
        {
            var _users = await _userManager.GetUsersInRoleAsync("User");
            return _users.Select(q => new User
            {
                Email = q.Email,
                FirstName = q.FirstName,
                LastName = q.LastName
            }).ToList();
        }
    }
}
