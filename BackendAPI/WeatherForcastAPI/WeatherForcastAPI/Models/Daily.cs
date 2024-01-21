using Newtonsoft.Json;

namespace WeatherForcastAPI.Models
{
    [JsonObject]
    public class Daily
    {
        [JsonProperty("time")]
        public string? Time { get; set; }
        [JsonProperty("values")]
        public Values? Values { get; set; }
    }
}
