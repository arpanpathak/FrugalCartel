using FrugalCartel.API.Services;
using Microsoft.AspNetCore.Mvc;

namespace FrugalCartel.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class GrocorySearchController : ControllerBase
    {
        private readonly ILogger<GrocorySearchController> _logger;
        private readonly FrugalCartelSearchService _searchService;

        public GrocorySearchController(ILogger<GrocorySearchController> logger,
            FrugalCartelSearchService searchService)
        {
            _logger = logger;
            _searchService = searchService;
        }
        
        [HttpGet("search")]
        public IActionResult Search([FromQuery] string query, [FromQuery] string? store = null)
        {
            var results = _searchService.Search(query, store);
            return Ok(results);
        }
    }
}
