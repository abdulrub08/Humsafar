using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

[Route("api/[controller]")]
[ApiController]
public class SubscriptionController : ControllerBase
{
    private readonly MatrimonialDbContext _context;

    public SubscriptionController(MatrimonialDbContext context)
    {
        _context = context;
    }

    // Add Subscription
    [HttpPost("subscribe")]
    public async Task<IActionResult> Subscribe(Subscription subscription)
    {
        _context.Subscriptions.Add(subscription);
        await _context.SaveChangesAsync();
        return Ok(new { message = "Subscription added successfully." });
    }

    // Get Subscription by User ID
    [HttpGet("user/{userId}")]
    public async Task<IActionResult> GetSubscriptionByUser(int userId)
    {
        var subscription = await _context.Subscriptions
                                          .FirstOrDefaultAsync(s => s.UserId == userId);

        if (subscription == null)
        {
            return NotFound("Subscription not found.");
        }

        return Ok(subscription);
    }

    // Update Subscription
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateSubscription(int id, Subscription subscription)
    {
        if (id != subscription.SubscriptionId)
        {
            return BadRequest("Subscription ID mismatch.");
        }

        _context.Entry(subscription).State = EntityState.Modified;
        await _context.SaveChangesAsync();

        return Ok(new { message = "Subscription updated successfully." });
    }

    // Cancel Subscription
    [HttpDelete("{id}")]
    public async Task<IActionResult> CancelSubscription(int id)
    {
        var subscription = await _context.Subscriptions.FindAsync(id);

        if (subscription == null)
        {
            return NotFound("Subscription not found.");
        }

        _context.Subscriptions.Remove(subscription);
        await _context.SaveChangesAsync();

        return Ok(new { message = "Subscription canceled successfully." });
    }
}
