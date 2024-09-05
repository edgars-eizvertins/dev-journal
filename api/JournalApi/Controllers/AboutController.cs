using Microsoft.AspNetCore.Mvc;

namespace JournalApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AboutController : ControllerBase
    {
        // GET: api/MyNew
        [HttpGet]
        public IActionResult Get()
        {
            return Ok("Hello, this is a new endpoint!");
        }

        // You can add more endpoints here
    }
}
