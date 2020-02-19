using System;

namespace Afaq.Core
{
    // date time of when the event was triggered.
    public class BaseDomainEvent
    {
        public DateTime DateOccurred { get; protected set; } = DateTime.UtcNow;
    }
}
