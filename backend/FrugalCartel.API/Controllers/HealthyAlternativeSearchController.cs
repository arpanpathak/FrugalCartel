using Microsoft.AspNetCore.Mvc;

namespace FrugalCartel.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class HealthyAlternativeSearchController : ControllerBase
    {
        // GET api/HealthyAlternativeSearch?query=milk
        [HttpGet("alternatives")]
        public IActionResult GetHealthyAlternatives([FromQuery] string query)
        {
            // Dummy static data for demonstration
            var dummyData = new List<object>
            {
                new { ProductName = "Almond Milk", HealthScore = 9, Price = 3.99 },
                new { ProductName = "Oat Milk", HealthScore = 8, Price = 2.99 },
                new { ProductName = "Soy Milk", HealthScore = 7, Price = 2.49 }
            };

            // In real implementation, filter/search based on `query`
            // Here, we just return all dummy data if query is not empty

            if (string.IsNullOrWhiteSpace(query))
            {
                return BadRequest(new { Message = "Query parameter is required." });
            }

            return Ok(dummyData);
        }
    }
}
