using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[Route("api/[controller]")]
[ApiController]
public class NotificationController : ControllerBase
{
    private readonly MatrimonialDbContext _context;

    public NotificationController(MatrimonialDbContext context)
    {
        _context = context;
    }

    // Add Notification
    [HttpPost("add")]
    public async Task<IActionResult> AddNotification(Notification notification)
    {
        notification.CreatedAt = DateTime.UtcNow;
        notification.IsRead = false;

        _context.Notifications.Add(notification);
        await _context.SaveChangesAsync();

        return Ok(new { message = "Notification sent." });
    }

    // Get Notifications by User ID
    [HttpGet("user/{userId}")]
    public async Task<IActionResult> GetNotificationsByUser(int userId)
    {
        var notifications = await _context.Notifications
                                           .Where(n => n.UserId == userId)
                                           .OrderByDescending(n => n.CreatedAt)
                                           .ToListAsync();

        if (notifications == null || !notifications.Any())
        {
            return NotFound("No notifications found.");
        }

        return Ok(notifications);
    }

    // Mark Notification as Read
    [HttpPut("{id}")]
    public async Task<IActionResult> MarkNotificationAsRead(int id)
    {
        var notification = await _context.Notifications.FindAsync(id);

        if (notification == null)
        {
            return NotFound("Notification not found.");
        }

        notification.IsRead = true;
        _context.Notifications.Update(notification);
        await _context.SaveChangesAsync();

        return Ok(new { message = "Notification marked as read." });
    }
}
