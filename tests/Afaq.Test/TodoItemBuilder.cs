using Afaq.Core.Entities;

namespace Afaq.Tests
{
    public class TodoItemBuilder
    {
        private TodoItem _todo = new TodoItem();

        public TodoItemBuilder Id(int id)
        {
            _todo.Id = id;
            return this;
        }

        public TodoItemBuilder Title(string title)
        {
            _todo.Title = title;
            return this;
        }

        public TodoItemBuilder Description(string description)
        {
            _todo.Description = description;
            return this;
        }

        public TodoItemBuilder WithDefaultValues()
        {
            _todo = new TodoItem() { Id = 1, Title = "Test Item", Description = "blahty"};
            return this;
        }

        public TodoItem Build() => _todo;
    }
}