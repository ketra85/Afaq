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

        public static void Initialize(IServiceProvider serviceProvider)
        {
            using(var dbContext = new AppDbContext(
                serviceProvider.GetRequiredService<DbContextOptions<AppDbContext>>(), null))
            {
                if(dbContext.TodoItems.Any()) 
                {
                    return;
                }

                PopulateTestData(dbContext);
            }
        }

        public static void PopulateTestData(AppDbContext dbContext) 
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
    }
}