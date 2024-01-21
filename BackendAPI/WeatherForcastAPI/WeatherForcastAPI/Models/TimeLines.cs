using Newtonsoft.Json;

namespace WeatherForcastAPI.Models
{
    [JsonObject]
    public class TimeLines
    {
        [JsonProperty("daily")]
        public List<Daily>? Daily { get; set; }
    }
}
