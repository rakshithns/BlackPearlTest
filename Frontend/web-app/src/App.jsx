import MainComponent from './components/MainComponent';
import { WeatherProvider } from './context/WeatherContext';
import './App.css'

function App() {

  return (
    <WeatherProvider>
      <MainComponent />
    </WeatherProvider>
  )
}

export default App
