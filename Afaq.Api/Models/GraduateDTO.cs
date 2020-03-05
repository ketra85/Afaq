using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Afaq.Core.Entities;

namespace Afaq.Api.Models
{
    public class GraduateDTO : UserDTO
    {
        public virtual Plan Plan { get; set; }
        public virtual ICollection<Rotation> Rotations { get; set; } 
        public virtual ICollection<Project> Projects { get; set; }

        public static GraduateDTO FromGd(User user, Plan plan)
        {
            return new GraduateDTO()
            {
                Id = user.Id,
                StaffId = user.StaffId,
                Email = user.Email,
                // Phone = user.Phone,
                Doj = user.Doj,
                Plan = plan
                // Rotations,
                // Projects
            };
        }
    }
}