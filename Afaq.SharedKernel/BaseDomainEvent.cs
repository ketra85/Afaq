using System;

namespace Afaq.SharedKernel
{
    public class BaseDomainEvent
    {
        public DateTime DateOccurred { get; protected set; } = DateTime.UtcNow;
    }
}
