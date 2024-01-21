using WeatherForcastAPI.Models;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using System.Runtime;

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

        public async Task<WeatherForecastInfo> GetWeatherForecasts(string location)
        {
            string url = @"https://api.tomorrow.io/v4/weather/forecast?location=" + location + "&apikey=" + _apiKey;
            HttpResponseMessage response = await _httpClient.GetAsync(url);
            string jsonResult = await response.Content.ReadAsStringAsync();
            var obj = JsonConvert.DeserializeObject<WeatherForecastInfo>(jsonResult);
            return obj;
        }
    }
}
