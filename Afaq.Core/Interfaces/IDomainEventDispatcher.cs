using System.Threading.Tasks;
using Afaq.Core;

namespace Afaq.Core.Interfaces
{
    public interface IDomainEventDispatcher
    {
        Task Dispatch(BaseDomainEvent domainEvent);
    }
}