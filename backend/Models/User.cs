using System;

namespace backend
{
    public class User
    {
        public Guid UserId { get; set; }
        public DateTime CreationDate { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string DisplayName { get; set; }
    }
}
