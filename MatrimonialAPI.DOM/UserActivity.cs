public class UserActivity
{
    public int UserActivityId { get; set; }
    public int UserId { get; set; }
    public string ActivityType { get; set; }  // Example: "Profile Update", "Login", etc.
    public string Description { get; set; }   // Description of the activity
    public DateTime ActivityDate { get; set; } // When the activity occurred

    public User User { get; set; }
}
