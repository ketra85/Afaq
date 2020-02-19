using Afaq.Core.Events;
using Afaq.Core;
using System;

namespace Afaq.Core.Entities
{
    public class Plan : BaseEntity 
    {
        public int gdId { get; set; }

        public int pmId { get; set; }

        public string stream { get; set; }

        public int numberOfRotations { get; set; }

        public BaseDateEntity dates { get; set; }

        public bool isActive { get; set; }
    }
}