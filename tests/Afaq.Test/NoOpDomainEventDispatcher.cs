using System.Threading.Tasks;
using Afaq.Core.Interfaces;
using Afaq.Core;

namespace Afaq.Tests
{
    public class NoOpDomainEventDispatcher : IDomainEventDispatcher
    {
        public Task Dispatch(BaseDomainEvent domainEvent)
        {
            return Task.CompletedTask;
        }
    }
}