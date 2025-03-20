using Matrimonial.BAL.Service;
using Matrimonial.Contracts.IdentityServices;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

public static class PersistenceServiceRegistration
{
    public static IServiceCollection AddPersistenceServices(this IServiceCollection services,
        IConfiguration configuration)
    {
        services.AddDbContext<MatrimonialDbContext>(options => {
            options.UseSqlServer(configuration.GetConnectionString("NikahDBString"));
        });

        //services.AddScoped(typeof(IGenericRepository<>), typeof(GenericRepository<>));
        services.AddScoped<IUserDetails, UserDetails>();
        //services.AddScoped<ILeaveAllocationRepository, LeaveAllocationRepository>();
        //services.AddScoped<ILeaveRequestRepository, LeaveRequestRepository>();

        return services;
    }
}
