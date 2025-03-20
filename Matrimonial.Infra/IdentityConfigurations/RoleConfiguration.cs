using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Matrimonial.Infra.IdentityConfigurations
{
    public class RoleConfiguration : IEntityTypeConfiguration<IdentityRole>
    {
        public void Configure(EntityTypeBuilder<IdentityRole> builder)
        {
            builder.HasData(
                new IdentityRole
                {
                    Id = "925bce9a-b848-4ff8-bac8-bf28baa44923",
                    Name = "Admin",
                    NormalizedName = "ADMIN"
                },
                new IdentityRole
                {
                    Id = "acea0c9c-4c23-4843-90c4-7c28cbb1728b",
                    Name = "User",
                    NormalizedName = "USER"
                },
                new IdentityRole
                {
                    Id = "e9dfc633-2843-4563-8b64-c710dc9f14c6",
                    Name = "SuperAdmin",
                    NormalizedName = "SUPERADMIN"
                }
            );
        }
    }
}
