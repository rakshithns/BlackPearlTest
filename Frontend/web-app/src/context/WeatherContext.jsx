import { createContext, useState } from 'react';

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [locWeatherData, setLocWeatherData] = useState({ location1: null, location2: null });

  return (
    <WeatherContext.Provider value={{ locWeatherData, setLocWeatherData }}>
      {children}
    </WeatherContext.Provider>
  );
};
