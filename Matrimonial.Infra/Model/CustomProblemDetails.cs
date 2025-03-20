using Microsoft.AspNetCore.Mvc;

namespace Matrimonial.Infra.Model
{
    internal class CustomProblemDetails : ProblemDetails
    {
        public IDictionary<string, string[]> Errors { get; set; } = new Dictionary<string, string[]>();
    }
}
