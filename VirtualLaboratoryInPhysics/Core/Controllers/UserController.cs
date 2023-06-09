using Domain.Entity;
using Microsoft.AspNetCore.Mvc;
using Service.Interfaces;
using System;
using System.Threading.Tasks;

namespace Core.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        private readonly IUserService _service;

        public UserController(IUserService service)
        {
            _service = service;
        }

        [HttpGet]
        [Route("GetLabs")]
        public async Task<IActionResult> GetLabs(Guid userId)
        {
            var result = await _service.GetLaboratoryWorks(userId);

            if(result == null)
            {
                return BadRequest();
            }

            if(result.Count == 0)
            {
                return NoContent();
            }

            return Ok(result);
        }

        [HttpGet]
        [Route("GetReports")]
        public async Task<IActionResult> GetReports(Guid userId)
        {
            var result = await _service.GetReports(userId);

            if (result == null)
            {
                return BadRequest();
            }

            if (result.Count == 0)
            {
                return NoContent();
            }

            return Ok(result);
        }

        [HttpPost]
        [Route("Registration")]
        public async Task<IActionResult> Registration(User user)
        {
            return await _service.Registration(user) ? Ok() : BadRequest();
        }

        [HttpPost]
        [Route("Authorization")]
        public async Task<IActionResult> Authorization(string login, string password)
        {
            return await _service.Authorization(login, password) ? Ok() : BadRequest();
        }
    }
}
