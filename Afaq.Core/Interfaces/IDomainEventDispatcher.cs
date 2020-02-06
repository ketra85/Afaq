using System.Threading.Tasks;
using Afaq.Core;

namespace Afaq.Core.Interfaces
{
    // provides async dispatch (for listeners) to events
    public interface IDomainEventDispatcher
    {
        Task Dispatch(BaseDomainEvent domainEvent);
    }
}