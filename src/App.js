import './App.css';
import CityDropdown from './components/CitySelectBox'
import WeatherCard from './components/WeatherCard'
import { WeatherProvider } from './contexts/WeatherContext';

function App() {
  return (
    <WeatherProvider>
      <div className="App">
        <div>
          <h1 className="title">TÜRKİYE <br /> HAVA DURUMU</h1>
          <CityDropdown />
          <WeatherCard />
        </div>
      </div>
    </WeatherProvider>
  );
}

export default App;