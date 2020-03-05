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
        public DateTime startDate { get; set; }

        public DateTime endDate { get; set; }

        public string modifiedBy { get; set; }

        public DateTime modifiedAt { get; set; }

        public string createdBy { get; set; }

        public DateTime createdAt { get; set; }

        // required
        public bool isActive { get; set; }
    }
}