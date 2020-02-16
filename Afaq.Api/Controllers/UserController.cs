using Afaq.Core;
using Afaq.Core.Entities;
using Afaq.Core.Interfaces;
using Afaq.Api.Models;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using Serilog;

namespace Afaq.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : BaseApiController
    {
        private readonly IRepository _repository;

        public UserController(IRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public IActionResult GetUsers()
        {
            var items =  _repository.List<User>()
                                    .Select(UserDTO.FromUser);
            Log.Information("" + items.Count());
            return Ok(items);
        }

        [HttpGet("{id}")]
        public IActionResult GetUserById(int id)
        {
            var item =  UserDTO.FromUser(_repository.GetById<User>(id));

            if(item == null)
            {
                return NotFound();
            }

            return Ok(item);
        }

        [HttpPost]
        public IActionResult PostUser([FromBody] UserDTO userParam)
        {
            var user = new User()
            {
                StaffId = userParam.StaffId,
                Name = userParam.Name,
                Email = userParam.Email,
                Doj = userParam.Doj
            };
            _repository.Add(user);
            Log.Information("User added successfully");
            return Ok(UserDTO.FromUser(user));
        }
    }
}