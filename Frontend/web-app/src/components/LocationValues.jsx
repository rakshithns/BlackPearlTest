import './LocationValues.css';

function LocationValues({dailyData}) {

  return (
    <div className="value-container">
        <p>Time: {dailyData.time}</p>
        <ul>
            <li>Min Temperature Celcius: {dailyData.values.temperatureMin}</li>
            <li>Min Temperature Fahrenheit: {dailyData.values.temperatureMinF}</li>
            <li>Max Temperature Celcius: {dailyData.values.temperatureMax}</li>
            <li>Max Temperature Fahrenheit: {dailyData.values.temperatureMaxF}</li>
            <li>Avg Temperature Celcius: {dailyData.values.temperatureAvg}</li>
            <li>Avg Temperature FahrenHeit: {dailyData.values.temperatureAvgF}</li>
        </ul>
    </div>
  )
}

export default LocationValues