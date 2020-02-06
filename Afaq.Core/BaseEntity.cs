using System.Collections.Generic;

namespace Afaq.Core
{
    // track Id and bind entities to events
    public abstract class BaseEntity
    {
        public int Id { get; set; }
        public List<BaseDomainEvent> Events = new List<BaseDomainEvent>();
    }
}