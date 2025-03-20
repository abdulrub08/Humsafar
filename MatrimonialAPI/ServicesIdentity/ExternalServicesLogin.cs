using Matrimonial.API.Model;
using Matrimonial.BaseServices.Models.Identity;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.Extensions.Configuration;

namespace Matrimonial.API.ServicesIdentity
{
    public static class ExternalServicesLogin
    {
        public static IServiceCollection AddExternalLoginServices(this IServiceCollection services, IConfiguration configuration)
        {
            ExternalAuthentication externalAuthentication = configuration.GetSection("Authentication").Get<ExternalAuthentication>();
            services.AddAuthentication(options =>
            {
                options.DefaultAuthenticateScheme = CookieAuthenticationDefaults.AuthenticationScheme;
                options.DefaultSignInScheme = CookieAuthenticationDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = CookieAuthenticationDefaults.AuthenticationScheme;
            })
            .AddCookie()
            .AddGoogle(googleOptions =>
            {
                googleOptions.ClientId = externalAuthentication.Google.ClientId;
                googleOptions.ClientSecret = externalAuthentication.Google.ClientSecret;
                googleOptions.CallbackPath = "/signin-google";
                googleOptions.SaveTokens = true;
                googleOptions.ClaimActions.MapJsonKey("urn:google:picture", "picture", "url");
            });
            //.AddFacebook(facebookOptions =>
            //{
            //    facebookOptions.AppId = externalAuthentication.Facebook.AppId;
            //    facebookOptions.AppSecret = externalAuthentication.Facebook.AppSecret;
            //    facebookOptions.CallbackPath = "/signin-facebook";
            //});
            return services;
        }
    }
}
