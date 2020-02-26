using System.Threading.Tasks;
using Afaq.Core;

namespace Afaq.Core.Interfaces
{
    // pretty much the "run" method for events
    // any event handler will extend this class
    public interface IHandle<in T> where T : BaseDomainEvent
    {
        Task Handle(T domainEvent);
    }
}