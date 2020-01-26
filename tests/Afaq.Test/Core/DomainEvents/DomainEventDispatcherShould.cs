using Afaq.Core.Entities;
using Afaq.Core.Events;
using Afaq.Infrastructure;
using Afaq.Infrastructure.DomainEvents;
using NUnit.Framework;

namespace Afaq.Tests.Core.DomainEvents
{
    public class DomainEventDispatcherShould
    {
        [Test]
        public void NotReturningAnEmptyListOfAvailableHandlers()
        {
            var container = ContainerSetup.BaseAutofacInitialization();
            var domainEventDispatcher = new DomainEventDispatcher(container);
            var todoItemCompletedEvent = new TodoItemCompletedEvent(new TodoItem());

            var handlersForEvent = domainEventDispatcher.GetWrappedHandlers(todoItemCompletedEvent);

            Assert.IsNotEmpty(handlersForEvent);
        }
    }
}

