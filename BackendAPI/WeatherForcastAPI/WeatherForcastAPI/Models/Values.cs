using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace WeatherForcastAPI.Models
{
    [JsonObject]
    public class Values
    {
        [JsonProperty("temperatureAvg")]
        public double TemperatureAvg { get; set; }
        [JsonProperty("temperatureMax")]
        public double TemperatureMax { get; set; }
        [JsonProperty("temperatureMin")]
        public double TemperatureMin { get; set; }

        [JsonIgnore] // This attribute prevents the property from being serialized
        public double TemperatureAvgF
        {
            get
            {
                // Example calculation
                return ((TemperatureAvg * (9/5)) + 32);
            }
        }
        [JsonIgnore] // This attribute prevents the property from being serialized
        public double TemperatureMaxF
        {
            get
            {
                // Example calculation
                return ((TemperatureMax * (9 / 5)) + 32);
            }
        }
        [JsonIgnore] // This attribute prevents the property from being serialized
        public double TemperatureMinF
        {
            get
            {
                // Example calculation
                return ((TemperatureMin * (9 / 5)) + 32);
            }
        }
    }
}
