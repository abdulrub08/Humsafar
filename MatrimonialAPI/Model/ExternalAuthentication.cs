namespace Matrimonial.API.Model
{
    public class ExternalAuthentication
    {
        public Google Google { get; set; }
        public Facebook Facebook { get; set; }
    }
    public class Google
    {
        public string ClientId { get; set; }
        public string ClientSecret { get; set; }
    }
    public class Facebook
    {
        public string AppId { get; set; }
        public string AppSecret { get; set; }
    }
}
