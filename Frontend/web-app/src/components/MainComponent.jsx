import { useContext } from 'react';
import LocationSearch from './LocationSearch';
import { WeatherContext } from '../context/WeatherContext';
import getLocationAvgTempertaure from '../utils/UtilityFunctions'
import './MainComponent.css';

function MainComponent() {
    const { locWeatherData } = useContext(WeatherContext);

  return (
    <div className="main-container">
      <LocationSearch locationNo={1}></LocationSearch>
      <LocationSearch locationNo={2}></LocationSearch>
      <div className="delta">
        <div>
            <h2>Delta</h2>
        </div>
        <div>
            <h3>Location 1 Avg</h3>
            <ul>
                <li>Avg High Temperature for all Days: {
                    getLocationAvgTempertaure(locWeatherData.location1, 'temperatureMax')
                }</li>
                <li>Avg Low Lempertaure for all Days:  {
                    getLocationAvgTempertaure(locWeatherData.location1, 'temperatureMin')
                }</li>
            </ul>
        </div>
        <div>
            <h3>Location 2 Avg</h3>
            <ul>
                <li>Avg High Temperature for all Days:  {
                    getLocationAvgTempertaure(locWeatherData.location2, 'temperatureMax')
                }</li>
                <li>Avg Low Lempertaure for all Days:  {
                    getLocationAvgTempertaure(locWeatherData.location2, 'temperatureMin')
                }</li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default MainComponent