public class Profile
{
    public int ProfileId { get; set; }
    public int UserId { get; set; }
    public string Religion { get; set; }
    public string Caste { get; set; }
    public string Height { get; set; }
    public string Weight { get; set; }
    public string Occupation { get; set; }
    public decimal? AnnualIncome { get; set; }
    public string AboutMe { get; set; }
    public string MaritalStatus { get; set; }
    public string ChildrenPreference { get; set; }
    public string DietPreferences { get; set; }
    public string PartnerPreferences { get; set; }
    public string PhotoVerificationStatus { get; set; } = "Pending";

    public User User { get; set; }
}
