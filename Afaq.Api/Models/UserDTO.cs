using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Afaq.Core.Entities;


//Object used to serialise and deserialise 
// To send from the api you would need to define this
// To receive a json request, you would need to bind it to this
namespace Afaq.Api.Models
{
    public class UserDTO
    {
        public int Id { get; set; }

        [Required]
        public int StaffId { get; set; }

        public string Name { get; set; }

        public String Email { get; set; }
        public DateTime Doj { get; set; }

        public static UserDTO FromUser(User user)
        {
            return new UserDTO()
            {
                Id = user.Id,
                StaffId = user.StaffId,
                Name = user.Name,
                Email = user.Email,
                Doj = user.Doj
            };
        }

    }
}