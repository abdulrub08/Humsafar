using System.ComponentModel.DataAnnotations;
namespace Matrimonial.BaseServices.Exceptions
{
    public class BadRequestException : Exception
    {
        public BadRequestException(string message) : base(message)
        {

        }
        public BadRequestException(string message, ValidationResult validationResult) : base(message)
        {
            ValidationErrors = new Dictionary<string, string[]>
            {
                { validationResult.MemberNames.FirstOrDefault() ?? "Unknown", new[] { validationResult.ErrorMessage } }
            };
        }

        public IDictionary<string, string[]> ValidationErrors { get; set; }
    }
}
