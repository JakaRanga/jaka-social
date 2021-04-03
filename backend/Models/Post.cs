using System;

namespace backend
{
    public class Post
    {
        public Guid PostId { get; set; }
        public DateTime CreationDate { get; set; }
        public User Author { get; set; }
        public string Content { get; set; }
    }
}
