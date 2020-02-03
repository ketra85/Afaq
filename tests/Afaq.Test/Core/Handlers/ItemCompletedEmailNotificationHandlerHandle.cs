using Afaq.Core.Entities;
using Afaq.Core.Events;
using Afaq.Core.Services;
using System;
using System.Threading.Tasks;
using NUnit.Framework;

namespace Afaq.Tests.Core.Entities
{
    public class ItemCompletedEmailNotificationHandlerHandle
    {
        [Test]
        public void ThrowsExceptionGiveNullEventArgument()
        {
            var handler = new ItemCompletedEmailNotificationHandler();
            Exception ex = Assert.ThrowsAsync<ArgumentNullException>(async () => await handler.Handle(null));
        }

        [Test]
        public async Task DoesNothingGivenEventInstance()
        {
            var handler = new ItemCompletedEmailNotificationHandler();

            await handler.Handle(new TodoItemCompletedEvent(new TodoItem()));
        }
    }
}