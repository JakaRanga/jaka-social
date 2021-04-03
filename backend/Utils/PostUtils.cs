using System;
using System.Collections.Generic;
using System.Linq;
using backend;

namespace backend.Utils
{

    public static class PostUtils
    {

        public static Post GeneratePost(bool isAuthorMain = false)
        {
            return new Post
            {
                PostId = new Guid(),
                CreationDate = DateTime.Now,
                Author = UserUtils.GenerateUser(isAuthorMain),
                Content = StringUtils.GetRandomString(200)
            };
        }

        public static IEnumerable<Post> GeneratePosts(int length = 5)
        {
            return Enumerable.Range(0, length).Select(x => PostUtils.GeneratePost()).ToList();
        }
    }
}