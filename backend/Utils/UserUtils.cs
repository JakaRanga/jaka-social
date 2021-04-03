using System;
using System.Collections.Generic;
using System.Linq;
using backend;

namespace backend.Utils
{

    public static class UserUtils
    {
        private static Guid mainUser = new Guid("f3dd1131-d0b7-499e-a9bf-2305ec079f42");

        public static User GenerateUser(bool isMain = false)
        {
            return new User
            {
                UserId = isMain ? mainUser : new Guid(),
                CreationDate = DateTime.Now,
                FirstName = StringUtils.Capitalize(StringUtils.GetRandomString(5)),
                LastName = StringUtils.Capitalize(StringUtils.GetRandomString(5)),
                DisplayName = StringUtils.Capitalize(StringUtils.GetRandomString(5)),
            };
        }

        public static IEnumerable<User> GenerateUsers(int length = 5)
        {
            return Enumerable.Range(0, length).Select(x => UserUtils.GenerateUser()).ToList();
        }
    }
}