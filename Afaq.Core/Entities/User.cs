using Afaq.Core.Events;
using Afaq.Core;
using System;

// Entities are the equivalent of models in api or mvc applications
// Every Entity will extend the base entity which handles shared fields (id and event binding)
namespace Afaq.Core.Entities
{
    public class User : BaseEntity
    {
        // public Int64 StaffSeqNumber { get; set; }

        // required
        public int StaffId { get; set; }

        // required
        public string Name { get; set; }

        //required
        public string Email { get; set; }

        //add phone field not required
        // public string Phone { get; set; }

        // add avatar img field not required
        // public string avatarImg { get; set; }

        // required
        public DateTime Doj { get; set; }

        // isActive required
        // public bool isActive { get; set; }

    }
}