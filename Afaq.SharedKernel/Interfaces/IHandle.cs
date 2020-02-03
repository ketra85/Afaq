using System.Threading.Tasks;
using Afaq.SharedKernel;

namespace Afaq.SharedKernel.Interfaces
{
    public interface IHandle<in T> where T : BaseDomainEvent
    {
        Task Handle(T domainEvent);
    }
}