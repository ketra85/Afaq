using System.Threading.Tasks;
using Afaq.SharedKernel;

namespace Afaq.SharedKernel.Interfaces
{
    public interface IDomainEventDispatcher
    {
        Task Dispatch(BaseDomainEvent domainEvent);
    }
}