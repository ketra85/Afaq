using Afaq.Core;
using Afaq.Core.Entities;
using Afaq.Core.Interfaces;
using Afaq.Api.Models;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using Serilog;

namespace Afaq.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TodoController : BaseApiController
    {
        private readonly IRepository _repository;

        public TodoController(IRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public IActionResult GetTodoItems()
        {
            var items = _repository.List<TodoItem>()
                            .Select(TodoItemDTO.FromTodoItem);
            return Ok(items);
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var item = TodoItemDTO.FromTodoItem(_repository.GetById<TodoItem>(id));
            
            if(item == null) 
            {
                return NotFound();
            }
            
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
            Log.Information("Todo posted successfully");
            return Ok(TodoItemDTO.FromTodoItem(todoItem));
        }

        [HttpPatch("{id}/complete")]
        public IActionResult Complete(int id)
        {
            var todoItem = _repository.GetById<TodoItem>(id);
            todoItem.MarkComplete();
            _repository.Update(todoItem);
            return Ok(TodoItemDTO.FromTodoItem(todoItem));
        }
    }
}