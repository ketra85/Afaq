using Afaq.Core.Events;
using Afaq.Core;
using System;

namespace Afaq.Core.Entities
{
    public class Task : BaseEntity 
    {
        // required
        public string name { get; set; }
        
        public string description { get; set; }

        // required
        public DateTime dueDate { get; set; }

        // required
        public bool status { get; set; }

        public string attachmentUrl { get; set; }

        public bool isActive { get; set; }
    }
}