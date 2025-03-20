using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[Route("api/[controller]")]
[ApiController]
public class UserActivityController : ControllerBase
{
    private readonly MatrimonialDbContext _context;

    public UserActivityController(MatrimonialDbContext context)
    {
        _context = context;
    }

    // Add User Activity
    [HttpPost("add")]
    public async Task<IActionResult> AddUserActivity(UserActivity userActivity)
    {
        _context.UserActivities.Add(userActivity);
        await _context.SaveChangesAsync();
        return Ok(new { message = "Activity logged successfully." });
    }

    // Get Activities by User ID
    [HttpGet("user/{userId}")]
    public async Task<IActionResult> GetUserActivities(int userId)
    {
        var activities = await _context.UserActivities
                                        .Where(a => a.UserId == userId)
                                        .OrderByDescending(a => a.ActivityDate)
                                        .ToListAsync();

        if (activities == null || !activities.Any())
        {
            return NotFound("No activities found for this user.");
        }

        return Ok(activities);
    }
}
