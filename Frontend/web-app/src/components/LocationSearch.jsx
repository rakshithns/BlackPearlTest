import { useState, useContext } from 'react';
import LocationValues from './LocationValues';
import { WeatherContext } from '../context/WeatherContext';
import axios from 'axios';
import './LocationSearch.css';

const LocationSearch = ({locationNo}) => {
    const [inputValue, setInputValue] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [debounceTimer, setDebounceTimer] = useState(null);
    const [weatherData, setWeatherData] = useState(null);
    const { setLocWeatherData } = useContext(WeatherContext);

    // Function to handle input changes for search bar
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        
        if (debounceTimer) clearTimeout(debounceTimer);

        const newTimer = setTimeout(() => {
            searchLocations(e.target.value);
        }, 100);

        setDebounceTimer(newTimer);
    };

    // Function to search locations based on the input value
    const searchLocations = async (input) => {
        if (!input || input === '') {
            setSuggestions([]);
            setWeatherData(null);
            setLocWeatherData(prev => ({ ...prev, ['location'+locationNo]: null }));
            return;
        }

        try {
            const response = await axios.get(`https://nominatim.openstreetmap.org/search?format=json&q=${input}`);
            setSuggestions(response.data); // Assuming response.data is an array of locations
        } catch (error) {
            console.error('Error fetching data:', error);
            setSuggestions([]);
            setWeatherData(null);
        }
    };

    // Function to handle suggestion selection
    const selectSuggestion = async (suggestion) => {
        setInputValue(suggestion.display_name); // display_name is a field in Nominatim's response
        setSuggestions([]);
        const weatherInfo = await axios.get(`https://localhost:7068/WeatherForecast/location/${suggestion.lat + ','+suggestion.lon}`);
        setWeatherData(weatherInfo.data);
        setLocWeatherData(prev => ({ ...prev, ['location'+locationNo]: weatherInfo.data }));
        if (debounceTimer) clearTimeout(debounceTimer);
    };

    return (
        <div className="search-container">
            <h2>Location {locationNo}</h2>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Search Location"
                className="search-input"
            />
            <ul className="suggestions-list">
                {suggestions.map((suggestion, index) => (
                    <li key={index} onClick={() => selectSuggestion(suggestion)} className="suggestion-item">
                        {suggestion.display_name}
                    </li>
                ))}
            </ul>
            <div>
                {
                    weatherData?.timeLines?.daily.map((data, index) => (
                        <LocationValues key={index} dailyData={data}></LocationValues>
                    ))
                }
            </div>
        </div>
    );
};

export default LocationSearch;
