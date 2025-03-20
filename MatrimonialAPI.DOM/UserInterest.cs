public class UserInterest
    {
        public int UserInterestId { get; set; }
        public int UserId { get; set; }
        public string InterestName { get; set; }  // Example: "Cooking", "Traveling"
        public string InterestDescription { get; set; }

        public User User { get; set; }
    }
