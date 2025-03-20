using Matrimonial.Contracts.IdentityServices;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

[Authorize]
[Route("api/user/")]
[ApiController]
public class UserController : ControllerBase
{
    private readonly IUserDetails _userContext;
    public UserController(IUserDetails usercontext)
    {
        _userContext = usercontext;
    }
    // Get User by email
    [HttpGet("GetUser/{email}")]
    public async Task<IActionResult> GetUser(string email)
    {
       var user = await _userContext.GetUser(email);
        if (user == null)
        {
            return NotFound();
        }
        return Ok(new { message = "User Details." ,data= user });
    }

    [HttpGet("GetUserById/{userid}")]
    public async Task<IActionResult> GetUserById(string userid)
    {
        var user = await _userContext.GetUser(userid);
        if (user == null)
        {
            return NotFound();
        }
        return Ok(new { message = "User Details.", data = user });
    }

    //Add method to get user by phone number
    [HttpGet("GetUserByPhoneNumber/{phoneNumber}")]
    public async Task<IActionResult> GetUserByPhoneNumber(string phoneNumber)
    {
        var user = await _userContext.GetUser(phoneNumber);
        if (user == null)
        {
            return NotFound();
        }
        return Ok(new { message = "User Details.", data = user });
    }
}
