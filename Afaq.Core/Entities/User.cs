using Afaq.Core.Events;
using Afaq.SharedKernel;
using System;

namespace Afaq.Core.Entities
{
    public class User : BaseEntity
    {
        public int StaffId { get; set; }

        public string Name { get; set; }

        public string Stream { get; set; }

        public string Phase { get; set; }

        public DateTime Doj { get; set; }

        public string Alerts { get; set; }

    }
}