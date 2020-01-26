using System.Threading.Tasks;
using Afaq.Core.Events;
using Afaq.SharedKernel.Interfaces;

namespace Afaq.Core.Services
{
    public class ItemCompletedEmailNotificationHandler : IHandle<TodoItemCompletedEvent>
    {
        public Task Handle(TodoItemCompletedEvent domainEvent)
        {
            //see this guard business
            return Task.CompletedTask;
        }
    }
}