using Matrimonial.API.ServicesIdentity;
using Matrimonial.Infra.Middleware;
using Serilog;

var builder = WebApplication.CreateBuilder(args);

// Replace default logging with Serilog
builder.Host.UseSerilog((context, loggerConfig) => loggerConfig
    .ReadFrom.Configuration(context.Configuration)
    .Enrich.FromLogContext()
    .WriteTo.Console()
    .WriteTo.File("logs/log-.txt", rollingInterval: RollingInterval.Day));

#region Service Configure
builder.Services.AddExternalLoginServices(builder.Configuration);
builder.Services.AddInfrastructureServices(builder.Configuration);
builder.Services.AddPersistenceServices(builder.Configuration);
builder.Services.AddIdentityServices(builder.Configuration);

builder.Services.AddControllers();

builder.Services.AddCors(options =>
{
    options.AddPolicy("all",
    //    builder => builder
    //        .WithOrigins("https://localhost:44312/") // Allow Angular app
    //        .AllowAnyHeader()
    //        .AllowAnyMethod()
    //        .AllowCredentials()); // Allow cookies if needed
    //options.AddPolicy("all",
    builder => builder
    .AllowAnyOrigin()
    .AllowAnyHeader()
    .AllowAnyMethod());
});
#endregion
builder.Services.AddHttpContextAccessor();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerWithJWTSupport();
#region Middleware Configure
var app = builder.Build();

app.UseMiddleware<ExceptionMiddleware>();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment() || app.Environment.IsProduction())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
#region Seed Roles and Claims
//using (var scope = app.Services.CreateScope())
//{
//    var services = scope.ServiceProvider;
//    var roleManager = services.GetRequiredService<RoleManager<IdentityRole>>();
//    var userManager = services.GetRequiredService<UserManager<ApplicationUser>>();

//    await SeedRolesAndClaims(roleManager, userManager);
//}
#endregion
app.UseSerilogRequestLogging(); // Logs HTTP requests

app.UseHttpsRedirection();
// Enable CORS (Modify as needed)
app.UseCors(policy =>
    policy.AllowAnyOrigin()
          .AllowAnyMethod()
          .AllowAnyHeader());
app.UseCors("all");

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
#endregion

#region Seed Roles and Claims
/// <param name="userManager">The user manager to manage users.</param>
/// <returns>A task that represents the asynchronous operation.</returns>
//async Task SeedRolesAndClaims(RoleManager<IdentityRole> roleManager, UserManager<ApplicationUser> userManager)
//{
//    var roles = new[] { "Admin", "User", "SuperAdmin" };

//    foreach (var role in roles)
//    {
//        if (!await roleManager.RoleExistsAsync(role))
//        {
//            await roleManager.CreateAsync(new IdentityRole(role));
//        }
//    }

//    var adminEmail = "admin@matrimony.com";
//    var adminUser = await userManager.FindByEmailAsync(adminEmail);

//    if (adminUser == null)
//    {
//        adminUser = new ApplicationUser
//        {
//            FirstName = "Admin",
//            LastName = "User",
//            UserName = adminEmail,
//            Email = adminEmail,
//            EmailConfirmed = true
//        };
//        await userManager.CreateAsync(adminUser, "Admin@123");

//        // Assign Admin Role
//        await userManager.AddToRoleAsync(adminUser, "Admin");

//        // Assign Claims to Admin
//        await userManager.AddClaimsAsync(adminUser, new List<Claim>
//        {
//            new Claim(ClaimTypes.Name, adminUser.FirstName+" " +adminUser.LastName),
//            new Claim(ClaimTypes.Role, "Admin"),
//            new Claim("Permission", "CanViewProfiles"),
//            new Claim("Permission", "CanPerformUserActivity"),
//            new Claim("Permission", "CanManageAllUsers"),
//            new Claim("Permission", "CanManageProfiles")
//        });
//    }
//}
#endregion