using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[Route("api/[controller]")]
[ApiController]
public class UserInterestController : ControllerBase
{
    private readonly MatrimonialDbContext _context;

    public UserInterestController(MatrimonialDbContext context)
    {
        _context = context;
    }

    // Add User Interest
    [HttpPost("add")]
    public async Task<IActionResult> AddUserInterest(UserInterest userInterest)
    {
        _context.UserInterests.Add(userInterest);
        await _context.SaveChangesAsync();
        return Ok(new { message = "Interest added successfully." });
    }

    // Get Interests by User ID
    [HttpGet("user/{userId}")]
    public async Task<IActionResult> GetUserInterests(int userId)
    {
        var interests = await _context.UserInterests
                                       .Where(i => i.UserId == userId)
                                       .ToListAsync();

        if (interests == null || !interests.Any())
        {
            return NotFound("No interests found for this user.");
        }

        return Ok(interests);
    }

    // Update User Interest
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateUserInterest(int id, UserInterest userInterest)
    {
        if (id != userInterest.UserInterestId)
        {
            return BadRequest("Interest ID mismatch.");
        }

        _context.Entry(userInterest).State = EntityState.Modified;
        await _context.SaveChangesAsync();
        return Ok(new { message = "Interest updated successfully." });
    }

    // Delete User Interest
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteUserInterest(int id)
    {
        var interest = await _context.UserInterests.FindAsync(id);

        if (interest == null)
        {
            return NotFound("Interest not found.");
        }

        _context.UserInterests.Remove(interest);
        await _context.SaveChangesAsync();

        return Ok(new { message = "Interest deleted successfully." });
    }
}
