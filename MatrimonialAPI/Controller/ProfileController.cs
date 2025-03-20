using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

[Route("api/[controller]")]
[ApiController]
public class ProfileController : ControllerBase
{
    private readonly MatrimonialDbContext _context;

    public ProfileController(MatrimonialDbContext context)
    {
        _context = context;
    }

    // Create or Update Profile
    [HttpPost("create-or-update")]
    public async Task<IActionResult> CreateOrUpdateProfile(Profile profile)
    {
        var userProfile = await _context.Profiles.FirstOrDefaultAsync(p => p.UserId == profile.UserId);

        if (userProfile == null)
        {
            _context.Profiles.Add(profile);
        }
        else
        {
            userProfile.Religion = profile.Religion;
            userProfile.Caste = profile.Caste;
            userProfile.Occupation = profile.Occupation;
            userProfile.AnnualIncome = profile.AnnualIncome;
            userProfile.AboutMe = profile.AboutMe;
            userProfile.MaritalStatus = profile.MaritalStatus;
            userProfile.ChildrenPreference = profile.ChildrenPreference;
            userProfile.DietPreferences = profile.DietPreferences;
            userProfile.PartnerPreferences = profile.PartnerPreferences;

            _context.Profiles.Update(userProfile);
        }

        await _context.SaveChangesAsync();
        return Ok(new { message = "Profile created/updated successfully." });
    }

    // Get Profile by User ID
    [HttpGet("{userId}")]
    public async Task<IActionResult> GetProfile(int userId)
    {
        var profile = await _context.Profiles
                                     .Include(p => p.User)
                                     .FirstOrDefaultAsync(p => p.UserId == userId);

        if (profile == null)
        {
            return NotFound("Profile not found.");
        }

        return Ok(profile);
    }

    // Delete Profile
    [HttpDelete("{userId}")]
    public async Task<IActionResult> DeleteProfile(int userId)
    {
        var profile = await _context.Profiles.FirstOrDefaultAsync(p => p.UserId == userId);

        if (profile == null)
        {
            return NotFound("Profile not found.");
        }

        _context.Profiles.Remove(profile);
        await _context.SaveChangesAsync();

        return Ok(new { message = "Profile deleted successfully." });
    }
}
