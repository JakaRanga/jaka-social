using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Utils;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace backend.Controllers
{
    [ApiController]
    [Route("posts")]
    public class PostController : ControllerBase
    {
        private readonly ILogger<PostController> _logger;

        public PostController(ILogger<PostController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        [Route("{guid}")]
        public Post GetPostByGuid(Guid postId)
        {
            return PostUtils.GeneratePost();
        }

        [HttpGet]
        [Route("latest")]
        public IEnumerable<Post> GetLatestPosts()
        {
            return PostUtils.GeneratePosts(10);
        }
    }
}
