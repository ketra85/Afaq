using Afaq.Core.Events;
using Afaq.Core;
using System;

namespace Afaq.Core.Entities
{
    public class Role : BaseEntity
    {
        public string name { get; set; }

        public string description { get; set; }
    }
}