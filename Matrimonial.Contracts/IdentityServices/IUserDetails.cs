using Matrimonial.DOM.Identity;

namespace Matrimonial.Contracts.IdentityServices
{
    public interface IUserDetails
    {
        public Task<IList<string>> GetUserRoles(ApplicationUser user);
        public Task<List<string?>> GetAllRoles();
        public Task<(bool, string)> SetUserRoles(ApplicationUser user, string role);
        /// <summary>
        /// Retrieves a user based on the provided identifier, which can be a user ID, email, phone number, or username.
        /// </summary>
        /// <param name="user_id_email_phone_username">The identifier for the user, which can be a user ID, email, phone number, or username.</param>
        /// <returns>A task that represents the asynchronous operation. The task result contains the user object.</returns>
        public Task<User> GetUser(string user_id_email_phone_username);
        public Task<List<User>> GetUsers();

    }
}
