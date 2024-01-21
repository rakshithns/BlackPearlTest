import { useState } from 'react';
import axios from 'axios';

const LocationSearch = ({locationNo}) => {
    const [inputValue, setInputValue] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [debounceTimer, setDebounceTimer] = useState(null);

    // Function to handle input changes
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
            return;
        }

        try {
            const response = await axios.get(`https://nominatim.openstreetmap.org/search?format=json&q=${input}`);
            setSuggestions(response.data); // Assuming response.data is an array of locations
        } catch (error) {
            console.error('Error fetching data:', error);
            setSuggestions([]);
        }
    };

    // Function to handle suggestion selection
    const selectSuggestion = async (suggestion) => {
        console.log(suggestion);
        setInputValue(suggestion.display_name); // display_name is a field in Nominatim's response
        setSuggestions([]);
        const weatherInfo = await axios.get(`https://localhost:7068/WeatherForecast/location/${suggestion.lat + ','+suggestion.lon}`);
        console.log(weatherInfo.data);
        if (debounceTimer) clearTimeout(debounceTimer);
    };

    return (
        <div>
            <h2>Location {locationNo}</h2>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Search Location"
            />
            <ul>
                {suggestions.map((suggestion, index) => (
                    <li key={index} onClick={() => selectSuggestion(suggestion)}>
                        {suggestion.display_name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LocationSearch;
