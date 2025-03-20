using Matrimonial.DOM.Identity;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Matrimonial.Infra.IdentityConfigurations
{
    public class UserConfiguration : IEntityTypeConfiguration<ApplicationUser>
    {
        public void Configure(EntityTypeBuilder<ApplicationUser> builder)
        {
            var hasher = new PasswordHasher<ApplicationUser>();
            builder.HasData(
                 new ApplicationUser
                 {
                     Id = "1497f6aa-9474-4ac8-8047-111639dfcd9d",
                     Email = "admin@matrimony.com",
                     NormalizedEmail = "ADMIN@MATRIMONY.COM",
                     FirstName = "Admin",
                     LastName = "User",
                     UserName = "admin@matrimony.com",
                     NormalizedUserName = "ADMIN@MATRIMONY.COM",
                     PasswordHash = hasher.HashPassword(null, "Admin@123"),
                     EmailConfirmed = true
                 },
                 new ApplicationUser
                 {
                     Id = "9e224968-33e4-4652-b7b7-8574d048cdb9",
                     Email = "Demo19@gmail.com",
                     NormalizedEmail = "DEMO19@GMAIL.COM",
                     FirstName = "Demo19",
                     LastName = "User",
                     UserName = "Demo19",
                     NormalizedUserName = "DEMO19",
                     PasswordHash = hasher.HashPassword(null, "Delhi@123"),
                     EmailConfirmed = true
                 }
            );
        }
    }
}
