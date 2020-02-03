using Afaq.Core.Entities;
using Afaq.Core;
using Serilog;

namespace Afaq.Core.Events
{
    public class TodoItemCompletedEvent : BaseDomainEvent
    {
        public TodoItem CompletedItem { get; set; }

        public TodoItemCompletedEvent(TodoItem completedItem)
        {
            Log.Information(completedItem.ToString(), "hi from complete event in core");
            CompletedItem = completedItem;
        }
    }
}