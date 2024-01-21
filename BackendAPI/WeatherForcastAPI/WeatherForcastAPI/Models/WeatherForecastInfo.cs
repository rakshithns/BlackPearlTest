using Newtonsoft.Json;

namespace WeatherForcastAPI.Models
{
    public class WeatherForecastInfo
    {
        [JsonProperty("timelines")]
        public TimeLines? TimeLines { get; set; }
    }
}
