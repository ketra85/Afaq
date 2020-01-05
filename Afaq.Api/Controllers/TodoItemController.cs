using Afaq.Core;
using Afaq.Core.Entities;
using Afaq.SharedKernel.Interfaces;
using Afaq.Api.Models;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace Afaq.Api.Controllers
{
    public class TodoItemController : BaseApiController
    {
        private readonly IRepository _repository;

        public TodoItemController(IRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public IActionResult List()
        {
            var items = _repository.List<TodoItem>()
                            .Select(TodoItemDTO.FromTodoItem);
            return Ok(items);
        }

        [HttpGet("{id:int}")]
        public IActionResult GetById(int id)
        {
            var item = TodoItemDTO.FromTodoItem(_repository.GetById<TodoItem>(id));
            return Ok(item);
        }

        [HttpPost]
        public IActionResult Post([FromBody] TodoItemDTO item)
        {
            var todoItem = new TodoItem()
            {
                Title = item.Title,
                Description = item.Description
            };
            _repository.Add(todoItem);
            return Ok(TodoItemDTO.FromTodoItem(todoItem));
        }

        [HttpPatch("{id:int}/complete")]
        public IActionResult Complete(int id)
        {
            var todoItem = _repository.GetById<TodoItem>(id);
            todoItem.MarkComplete();
            _repository.Update(todoItem);
            return Ok(TodoItemDTO.FromTodoItem(todoItem));
        }
    }
}