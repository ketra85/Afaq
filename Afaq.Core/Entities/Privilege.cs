using Afaq.Core.Events;
using Afaq.Core;
using System;

namespace Afaq.Core.Entities
{
    public class Privilege : BaseEntity
    {
        public string name { get; set; }

        public string modifiedBy { get; set; }

        public DateTime modifiedAt { get; set; }
    }
}