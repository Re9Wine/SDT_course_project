using Domain;
using Domain.Entity;
using Microsoft.AspNetCore.Mvc;
using Service.Interfaces;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Core.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ReportController : ControllerBase
    {
        private readonly IReportService _service;

        public ReportController(IReportService service)
        {
            _service = service;
        }

        [HttpGet]
        public async Task<IActionResult> GetById(Guid id)
        {
            var result = await _service.Get(id);

            if(result == null)
            {
                return NoContent();
            }

            return Ok(result);
        }

        [HttpGet]
        [Route("GetLatestByUser")]
        public async Task<IActionResult> GetLatestByUser(Guid userId)
        {
            var result = await _service.GetLatestByUser(userId);

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

        [HttpDelete]
        public async Task<IActionResult> Delete(Guid id)
        {
            return await _service.Delete(id) ? Ok() : BadRequest();
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] ReportForm reportForm)
        {
            return await _service.Create(reportForm) ? Ok() : BadRequest();
        }
    }
}
