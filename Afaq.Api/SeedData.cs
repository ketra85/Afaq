using Afaq.Core.Entities;
using Afaq.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Linq;

namespace Afaq.Api
{
    public static class SeedData
    {
        public static readonly TodoItem todoItem1 = new TodoItem
        {
            Title = "Get Sample Working",
            Description = "Try to get the sample to build"
        };

        public static readonly TodoItem todoItem2 = new TodoItem
        {
            Title = "Review Solution",
            Description = "Review the different projects in the solution and how they relate to one another."
        };

        public static readonly TodoItem todoItem3 = new TodoItem
        {
            Title = "Run and Review Tests",
            Description = "Make sure all the tests run and review what they are doing."
        };

        public static readonly User user1 = new User
        {
            StaffId = 1,
            Name = "Abdulla Al-ansari",
            Email = "alansari.aaaa@gmail.com",
            Doj = DateTime.Now
        };

        public static readonly User user2 = new User
        {
            StaffId = 2,
            Name = "Yousuf",
            Email = "y@afaq.com",
            Doj = DateTime.Now
        };

        public static readonly User user3 = new User
        {
            StaffId = 3,
            Name = "Reem",
            Email = "r@afaq.com",
            Doj = DateTime.Now
        };
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using(var dbContext = new AppDbContext(
                serviceProvider.GetRequiredService<DbContextOptions<AppDbContext>>(), null))
            {
                if(dbContext.TodoItems.Any()) 
                {
                    return;
                } else if(dbContext.Users.Any()) 
                {
                    return;
                }

                PopulateTodoTestData(dbContext);
                PopulateUserTestData(dbContext);
            }
        }

        public static void PopulateTodoTestData(AppDbContext dbContext) 
        {
            foreach(var item in dbContext.TodoItems)
            {
                dbContext.Remove(item);
            }
            
            dbContext.SaveChanges();
            dbContext.TodoItems.Add(todoItem1);
            dbContext.TodoItems.Add(todoItem2);
            dbContext.TodoItems.Add(todoItem3);
            dbContext.SaveChanges();
        }

        public static void PopulateUserTestData(AppDbContext dbContext)
        {
            foreach(var user in dbContext.Users) 
            {
                dbContext.Remove(user);
            }

            dbContext.SaveChanges();
            dbContext.Users.Add(user1);
            dbContext.Users.Add(user2);
            dbContext.Users.Add(user3);
            dbContext.SaveChanges();
        }
    }
}