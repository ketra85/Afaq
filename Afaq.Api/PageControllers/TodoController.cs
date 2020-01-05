using Afaq.Core;
using Afaq.Core.Entities;
using Afaq.SharedKernel.Interfaces;
using Afaq.Api.Models;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace Afaq.Api.PageControllers
{
    public class TodoController : Controller
    {
        private readonly IRepository _repository;

        public TodoController(IRepository repository)
        {
            _repository = repository;
        }

        public IActionResult Index()
        {
            var items = _repository.List<TodoItem>()
                            .Select(TodoItemDTO.FromTodoItem);
            return View(items);
        }

        public IActionResult Populate()
        {
            int recordsAdded = DbPopulator.PopulateDb(_repository);
            return Ok(recordsAdded);
        }
    }
}