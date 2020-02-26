using Afaq.Core.Entities;
using Afaq.Core.Interfaces;
using System.Linq;
using System;

namespace Afaq.Core
{
    public static class DbPopulator
    {
        public static int PopulateTodoDb(IRepository todoRepository)
        {
            if(todoRepository.List<User>().Count() >= 5) return 0;
            todoRepository.Add(new TodoItem
            {
                Title = "Get Sample Working",
                Description = "Try to get the sample build"
            });
            todoRepository.Add(new TodoItem
            {
                Title = "Review Solution",
                Description = "Review the different projects in the solution and how they relate to one another"
            });
            todoRepository.Add(new TodoItem
            {
                Title = "Run and Review Tests",
                Description = "Make sure all the tests run and review what they are doing"
            });


            return todoRepository.List<TodoItem>().Count();
        }

        public static int PopulateUserDb(IRepository userRepository)
        {
            if(userRepository.List<User>().Count() >= 5) return 0;
            userRepository.Add(new User
            {
                StaffId = 1,
                Name = "Abdulla Al-ansari",
                Email = "alansari.aaaa@gmail.com",
                Doj = DateTime.Now
            });
            userRepository.Add(new User
            {
                StaffId = 2,
                Name = "Yousuf",
                Email = "y@afaq.com",
                Doj = DateTime.Now
            });
            userRepository.Add(new User
            {
                StaffId = 3,
                Name = "Reem",
                Email = "r@afaq.com",
                Doj = DateTime.Now
            });


            return userRepository.List<User>().Count();
        }
    }
}