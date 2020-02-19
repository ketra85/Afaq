using Afaq.Core.Events;
using Afaq.Core;
using System;

namespace Afaq.Core.Entities
{
    public class BaseDateEntity : BaseEntity
    {
        public DateTime startDate { get; set; }

        public DateTime endDate { get; set; }

        public string modifiedBy { get; set; }

        public DateTime modifiedAt { get; set; }

        public string createdBy { get; set; }

        public DateTime createdAt { get; set; }
    }
}