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
    public class GraduateController : BaseApiController 
    {
        private readonly IRepository _repository;

        public GraduateController(IRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public IActionResult GetGds() 
        {
            var gds = _repository.List<User>();
            Log.Information("" + gds.Count());
            return Ok(gds);
        }
    }
}