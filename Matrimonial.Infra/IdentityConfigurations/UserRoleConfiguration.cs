using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Matrimonial.Infra.IdentityConfigurations
{
    public class UserRoleConfiguration : IEntityTypeConfiguration<IdentityUserRole<string>>
    {
        public void Configure(EntityTypeBuilder<IdentityUserRole<string>> builder)
        {
            builder.HasData(
                new IdentityUserRole<string>
                {
                    RoleId = "925bce9a-b848-4ff8-bac8-bf28baa44923",
                    UserId = "1497f6aa-9474-4ac8-8047-111639dfcd9d"
                },
                new IdentityUserRole<string>
                {
                    RoleId = "acea0c9c-4c23-4843-90c4-7c28cbb1728b",
                    UserId = "6e913e97-a4f0-48ad-bd83-7dab089da512"
                }
            );
        }
    }
}
