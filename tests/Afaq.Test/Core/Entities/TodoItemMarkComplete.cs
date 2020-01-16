using Afaq.Core.Entities;
using Afaq.Core.Events;
using System.Linq;
using NUnit.Framework;

namespace Afaq.Tests.Core.Entities
{
    public class TodoItemMarkComplete
    {
        [Test]
        public void SetIsDoneToTrue()
        {
           var item = new TodoItemBuilder()
            .WithDefaultValues()
            .Description("")
            .Build();
            item.MarkComplete();
            Assert.IsTrue(item.IsDone); 
        }

        [Test]
        public void RaisesTodoItemCompletedEvent()
        {
            var item = new TodoItemBuilder().Build();
            item.MarkComplete();

            Assert.That(item.Events , Has.Exactly(1).Items);
            Assert.IsInstanceOf(typeof(TodoItemCompletedEvent), item.Events.First());
        }
    }
}