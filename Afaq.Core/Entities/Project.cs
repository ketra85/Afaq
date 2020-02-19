using Afaq.Core.Events;
using Afaq.Core;
using System;

namespace Afaq.Core.Entities
{
    public class Project : BaseEntity 
    {
        // project's name not gd
        public string name { get; set; }

        public string description { get; set; }

        public int rotationId { get; set; }

        public BaseDateEntity dates { get; set; }

        public bool isActive { get; set; } 
    }
}