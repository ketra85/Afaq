using Afaq.Core.Events;
using Afaq.Core;
using System;

namespace Afaq.Core.Entities
{
    public class Rotation : BaseEntity 
    {
        // rotation name, not gd's
        public string name { get; set; }

        // not required
        public string description { get; set; }

        // required
        public int lmId { get; set; }

        // remove this; we have name
        public string divisionName { get; set; }

        // required
        public int planId { get; set; }

        // remove this; use rotation types
        public string phase { get; set; }

        // required
        public DateTime startDate { get; set; }

        public DateTime endDate { get; set; }

        public string modifiedBy { get; set; }

        public DateTime modifiedAt { get; set; }

        public string createdBy { get; set; }

        public DateTime createdAt { get; set; }

        public bool isActive { get; set; }
    }
}