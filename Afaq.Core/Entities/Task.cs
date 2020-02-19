using Afaq.Core.Events;
using Afaq.Core;
using System;

namespace Afaq.Core.Entities
{
    public class Task : BaseEntity 
    {
        public string name { get; set; }
        
        public string description { get; set; }

        public DateTime dueDate { get; set; }

        public bool status { get; set; }

        public string attachmentUrl { get; set; }

        public bool isActive { get; set; }
    }
}