using System.Threading.Tasks;
using Afaq.Core;

namespace Afaq.Core.Interfaces
{
    public interface IHandle<in T> where T : BaseDomainEvent
    {
        Task Handle(T domainEvent);
    }
}