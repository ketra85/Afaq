using Afaq.Core.Events;
using Afaq.Core;
using System;

namespace Afaq.Core.Entities
{
    public class Plan : BaseEntity 
    {
        // required
        public int gdId { get; set; }

        // required
        public int pmId { get; set; }

        // required
        public string stream { get; set; }

        // required but can be 0
        public int numberOfRotations { get; set; }

        // required
        public BaseDateEntity dates { get; set; }

        // required
        public bool isActive { get; set; }
    }
}