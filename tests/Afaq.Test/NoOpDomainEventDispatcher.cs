using System.Threading.Tasks;
using Afaq.SharedKernel.Interfaces;
using Afaq.SharedKernel;

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