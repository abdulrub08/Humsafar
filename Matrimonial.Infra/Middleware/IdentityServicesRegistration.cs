using Matrimonial.BAL.Service;
using Matrimonial.BaseServices.Models.Identity;
using Matrimonial.Contracts.IdentityServices;
using Matrimonial.DbContext;
using Matrimonial.DOM.Identity;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using System.Security.Claims;
using System.Text;

namespace Matrimonial.Infra.Middleware
{
    public static class IdentityServicesRegistration
    {
        public static IServiceCollection AddIdentityServices(this IServiceCollection services, IConfiguration configuration)
        {
            // SQL Server Connection String
            var connectionString = configuration.GetConnectionString("AuthConnection");
            services.Configure<JwtSettings>(configuration.GetSection("JwtSettings"));

            services.AddDbContext<NikahAuthDbContext>(options =>
               options.UseSqlServer(connectionString));

            services.AddIdentity<ApplicationUser, IdentityRole>(options =>
            {
                options.User.RequireUniqueEmail = true;  // Enforce unique email
            })
            .AddEntityFrameworkStores<NikahAuthDbContext>()
            .AddDefaultTokenProviders();            
            
            services.AddTransient<IAuthService, AuthService>();

            services.AddAuthentication(options =>
            {
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            }).AddJwtBearer(o =>
            {
                o.RequireHttpsMetadata = false;
                o.SaveToken = true;
                o.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    ValidateIssuer = true,
                    ValidateAudience = true,
                    ValidateLifetime = true,
                    ClockSkew = TimeSpan.Zero,
                    ValidIssuer = configuration["JwtSettings:Issuer"],
                    ValidAudience = configuration["JwtSettings:Audience"],
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["JwtSettings:Key"])),
                    RoleClaimType = ClaimTypes.Role,  // Ensures role claims work correctly
                    NameClaimType = ClaimTypes.Name   // Sets name claim correctly

                };
            });
            services.AddAuthorization(options =>
            {
                options.AddPolicy("ViewProfiles", policy =>
                {
                    policy.RequireAuthenticatedUser(); // Ensures user is logged in
                    policy.RequireClaim("Permission", "CanViewProfiles"); // Requires a claim
                });
                options.AddPolicy("Users", policy =>
                {
                    policy.RequireAuthenticatedUser(); // Ensures user is logged in
                    policy.RequireClaim("Permission", "CanPerformUserActivity"); // Requires a claim
                });
                options.AddPolicy("Admin", policy =>
                {
                    policy.RequireAuthenticatedUser(); // Ensures user is logged in
                    policy.RequireClaim("Permission", "CanManageAllUsers"); // Requires a claim
                });
                options.AddPolicy("Profiles", policy =>
                {
                    policy.RequireAuthenticatedUser(); // Ensures user is logged in
                    policy.RequireClaim("Permission", "CanManageProfiles"); // Requires a claim
                });
            });
            return services;
        }
        public static IServiceCollection AddSwaggerWithJWTSupport(this IServiceCollection services)
        {
            // SQL Server Connection String
            // Configure Swagger with JWT support
            services.AddEndpointsApiExplorer();
            services.AddSwaggerGen(options =>
            {
                options.SwaggerDoc("v1", new OpenApiInfo { Title = "Auth API", Version = "v1" });

                // Add JWT Authentication in Swagger UI
                options.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
                {
                    Name = "Authorization",
                    Type = SecuritySchemeType.Http,
                    Scheme = "Bearer",
                    BearerFormat = "JWT",
                    In = ParameterLocation.Header,
                    Description = "Enter 'Bearer' followed by your JWT token."
                });

                options.AddSecurityRequirement(new OpenApiSecurityRequirement
                {
                    {
                        new OpenApiSecurityScheme
                        {
                            Reference = new OpenApiReference
                            {
                                Type = ReferenceType.SecurityScheme,
                                Id = "Bearer"
                            }
                        },
                        new string[] {}
                    }
                });
                // Enable auto-populated textboxes for API testing
                options.OperationFilter<SwaggerDefaultValues>();
            });
            return services;
        }
        public static WebApplication AddCorsPolicy(this WebApplication app)
        {
            // Enable CORS (Modify as needed)
            app.UseCors(policy =>
                policy.AllowAnyOrigin()
                      .AllowAnyMethod()
                      .AllowAnyHeader());

            // Enable Authorization & Routing
            app.UseAuthentication();
            app.UseAuthorization();
            app.MapControllers();

            return app;
        }
    }
}
