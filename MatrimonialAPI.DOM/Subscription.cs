public class Subscription
{
    public int SubscriptionId { get; set; }
    public int UserId { get; set; }
    public string PlanName { get; set; }
    public int PlanDuration { get; set; }  // in months
    public decimal PlanPrice { get; set; }
    public DateTime StartDate { get; set; }
    public DateTime EndDate { get; set; }
    public string PaymentStatus { get; set; } = "Pending";
    public string PaymentMethod { get; set; }

    public User User { get; set; }
}
