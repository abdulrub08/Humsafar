using Matrimonial.DOM.Identity;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Matrimonial.DbContext
{
    public class NikahAuthDbContext : IdentityDbContext<ApplicationUser>
    {
        public NikahAuthDbContext(DbContextOptions<NikahAuthDbContext> options)
            : base(options)
        {
        }

        public DbSet<ApplicationUser> ApplicationUsers { get; set; }

        // Other DbSet properties for other entities
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            // Ensure email is unique
            builder.Entity<ApplicationUser>()
                .HasIndex(u => u.Email)
                .IsUnique();
            //builder.ApplyConfigurationsFromAssembly(typeof(NikahAuthDbContext).Assembly);
        }
    }
}
