using Domain;
using Domain.Entity;
using Microsoft.AspNetCore.Mvc;
using Service.Interfaces;
using System.Threading.Tasks;

namespace Core.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class LaboratoryWorkController : ControllerBase
    {
        private readonly ILaboratoryWorkService _service;

        public LaboratoryWorkController(ILaboratoryWorkService service)
        {
            _service = service;
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] LabForm labForm)
        {
            return await _service.Create(new LaboratoryWork(labForm)) ? Ok() : BadRequest();
        }
    }
}
