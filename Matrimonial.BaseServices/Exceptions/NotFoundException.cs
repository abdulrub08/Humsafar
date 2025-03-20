using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Matrimonial.BaseServices.Exceptions
{
    public class NotFoundException : Exception
    {
        public string Email { get; }

        public NotFoundException(string message, string email) : base(message)
        {
            Email = email;
        }
    }
}
