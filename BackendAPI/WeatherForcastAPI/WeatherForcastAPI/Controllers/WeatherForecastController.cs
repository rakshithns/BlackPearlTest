using Microsoft.AspNetCore.Mvc;
using WeatherForcastAPI.Services;

namespace WeatherForcastAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private readonly WeatherForecastService _weatherForecastService;

        public WeatherForecastController(WeatherForecastService weatherForecastService)
        {
            _weatherForecastService = weatherForecastService;
        }

        [HttpGet("location/{location}")]
        public async Task<IActionResult> Get(string location)
        {
            var forecasts = await _weatherForecastService.GetWeatherForecasts(location);
            return Ok(forecasts);
        }
    }
}
