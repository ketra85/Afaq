using Afaq.Core.Entities;
using Afaq.SharedKernel;

namespace Afaq.Core.Events
{
    public class TodoItemCompletedEvent : BaseDomainEvent
    {
        public TodoItem CompletedItem { get; set; }

        public TodoItemCompletedEvent(TodoItem completedItem)
        {
            CompletedItem = completedItem;
        }
    }
}