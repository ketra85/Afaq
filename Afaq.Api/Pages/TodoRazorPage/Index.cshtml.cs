using Afaq.Core.Entities;
using Afaq.SharedKernel.Interfaces;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.Collections.Generic;

namespace Afaq.Api.Pages.TodoRazorPage
{
    public class IndexModel : PageModel
    {
        private readonly IRepository _repository;

        public List<TodoItem> TodoItems { get; set; }

        public IndexModel(IRepository repository)
        {
            _repository = repository;
        }

        public void OnGet() 
        {
            TodoItems = _repository.List<TodoItem>();
        }
    }
}