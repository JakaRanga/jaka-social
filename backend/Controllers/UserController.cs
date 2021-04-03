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
    [Route("users")]
    public class UserController : ControllerBase
    {
        private readonly ILogger<UserController> _logger;

        public UserController(ILogger<UserController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        [Route("{guid}")]
        public User GetUserByGuid(Guid postId)
        {
            return UserUtils.GenerateUser();
        }

        [HttpGet]
        [Route("latest")]
        public IEnumerable<User> GetLatestusers()
        {
            return UserUtils.GenerateUsers(10);
        }
    }
}
