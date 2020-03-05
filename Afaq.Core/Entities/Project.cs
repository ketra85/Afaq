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
        public DateTime startDate { get; set; }

        public DateTime endDate { get; set; }

        public string modifiedBy { get; set; }

        public DateTime modifiedAt { get; set; }

        public string createdBy { get; set; }

        public DateTime createdAt { get; set; }

        //required
        public bool isActive { get; set; } 
    }
}