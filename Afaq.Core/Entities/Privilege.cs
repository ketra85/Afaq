using Afaq.Core.Events;
using Afaq.Core;
using System;

namespace Afaq.Core.Entities
{
    public class Privilege : BaseEntity
    {
        public string action { get; set; }

        public string description { get; set; }
    }
}