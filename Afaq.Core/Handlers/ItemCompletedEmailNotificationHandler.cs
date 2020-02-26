using System.Threading.Tasks;
using Afaq.Core.Events;
using Afaq.Core.Interfaces;

namespace Afaq.Core.Services
{
    // Sample event handler for todo that should send an email but it isn't bound to anything at the moment
    public class ItemCompletedEmailNotificationHandler : IHandle<TodoItemCompletedEvent>
    {
        public Task Handle(TodoItemCompletedEvent domainEvent)
        {
            //see this guard business
            return Task.CompletedTask;
        }
    }
}