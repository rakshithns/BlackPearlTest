using Microsoft.Extensions.Options;
using System.Runtime;
using WeatherForcastAPI.Models;

namespace WeatherForcastAPI.Services
{
    public class WeatherForecastService
    {
        private readonly HttpClient _httpClient;
        private readonly string _apiKey;

        public WeatherForecastService(HttpClient httpClient, IOptions<ApiKeySettings> options)
        {
            _httpClient = httpClient;
            _apiKey = options.Value.ApiKey;
        }

        public async Task<string> GetWeatherForecasts(string location)
        {
            string url = @"https://api.tomorrow.io/v4/weather/forecast?location=" + location + "&apikey=" + _apiKey;
            HttpResponseMessage response = await _httpClient.GetAsync(url);
            string jsonResult = await response.Content.ReadAsStringAsync();
            return jsonResult;
        }
    }
}
