using Afaq.Core.Events;
using Afaq.Core;
using System;

namespace Afaq.Core.Entities
{
    public class Rotation : BaseEntity 
    {
        // rotation name, not gd's
        public string name { get; set; }

        public string description { get; set; }

        public int lmId { get; set; }

        public string divisionName { get; set; }

        public int planId { get; set; }

        public string phase { get; set; }

        public BaseDateEntity dates { get; set; }

        public bool isActive { get; set; }
    }
}