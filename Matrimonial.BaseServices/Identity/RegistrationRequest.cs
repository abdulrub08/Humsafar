using System.ComponentModel.DataAnnotations;

namespace Matrimonial.BaseServices.Models.Identity
{
    public class RegistrationRequest
    {
        [Required] 
        public string FirstName { get; set; }

        [Required]
        public string LastName { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        [MinLength(6)]
        public string UserName { get; set; }

        [Required]
        [MinLength(6)]
        public string Password { get; set; }

        [Required]
        [MaxLength(10), MinLength(10)]
        public string Phone { get; set; }
    }
}
