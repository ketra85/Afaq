using Afaq.Core.Entities;
using Afaq.Core.Interfaces;
using System.Linq;

namespace Afaq.Core
{
    public static class DbPopulator
    {
        public static int PopulateDb(IRepository todoRepository)
        {
            if(todoRepository.List<TodoItem>().Count() >= 5) return 0;
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
    }
}