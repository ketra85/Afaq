using Afaq.Core.Events;
using Afaq.Core;
using System;

// Entities are the equivalent of models in api or mvc applications
// Every Entity will extend the base entity which handles shared fields (id and event binding)
namespace Afaq.Core.Entities
{
    public class User : BaseEntity
    {
        // required
        public int StaffId { get; set; }

        // required
        public string Name { get; set; }

        //required
        public string Email { get; set; }

        //add phone field not required

        // add avatar img field not required

        // required
        public DateTime Doj { get; set; }

        // isActive required

    }
}