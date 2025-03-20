using Microsoft.EntityFrameworkCore;

public class MatrimonialDbContext : DbContext
{
    public MatrimonialDbContext(DbContextOptions<MatrimonialDbContext> options) : base(options) { }

    public DbSet<User> Users { get; set; }
    public DbSet<Profile> Profiles { get; set; }
    public DbSet<Subscription> Subscriptions { get; set; }
    public DbSet<UserActivity> UserActivities { get; set; }
    public DbSet<UserInterest> UserInterests { get; set; }
    public DbSet<Notification> Notifications { get; set; }
}
