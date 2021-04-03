using System;
using backend;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;


namespace backend.Utils
{
    public static class StringUtils
    {
        private static Random random = new Random();

        public static string GetRandomString(int length = 5) 
        {
            const string chars = "abcdefghijklmnopqrstuvwxyz0123456789";
            
            return new string(Enumerable.Repeat(chars, length)
                .Select(s => s[random.Next(s.Length)]).ToArray());
            
        }


        public static string Capitalize(string str) {
            return Regex.Replace(str, @"\b[a-z]", delegate (Match m) 
            {
                return m.Value.ToUpper();
            });
        }

    }
}