
using Matrimonial.BaseServices.Models.Identity;

namespace Matrimonial.Contracts.IdentityServices
{
    public interface IAuthService
    {
        Task<AuthResponse> Login(AuthRequest request);
        Task<RegistrationResponse> Register(RegistrationRequest request);

    }
}
