using Afaq.Core.Events;
using Afaq.Core;
using System;

// Entities are the equivalent of models in api or mvc applications
// Every Entity will extend the base entity which handles shared fields (id and event binding)
namespace Afaq.Core.Entities
{
    public class User : BaseEntity
    {
        public int StaffId { get; set; }

        public string Name { get; set; }

        public string Stream { get; set; }

        public string Phase { get; set; }

        public DateTime Doj { get; set; }

        public string Alerts { get; set; }

    }
}