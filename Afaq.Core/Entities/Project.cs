using Afaq.Core.Events;
using Afaq.Core;
using System;

namespace Afaq.Core.Entities
{
    public class Project : BaseEntity 
    {
        // project's name not gd
        // required
        public string name { get; set; }

        public string description { get; set; }

        // required
        public int rotationId { get; set; }

        // required
        public BaseDateEntity dates { get; set; }

        //required
        public bool isActive { get; set; } 
    }
}