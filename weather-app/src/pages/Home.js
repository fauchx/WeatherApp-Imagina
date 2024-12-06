import { useState, useEffect } from 'react';
import getData from '@/services/getData'; 
import kelvinToCelsius from '@/lib/utils';

export default function Home() {
  const [city, setCity] = useState(null); 
  const [citySearch, setSearch] = useState(""); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const cityToSearch = citySearch.trim() === "" ? "Cali" : citySearch;
    fetchWeather(cityToSearch); 
  }, []); 

  const fetchWeather = async (cityName) => {
    try {
      const data = await getData(cityName); 
      setCity(data);
      setError(null); 
    } catch (err) {
      setError('Error fetching weather data');
      setCity(null);
    }
  };

  const submitCity = (e) => {
    e.preventDefault(); 
    if (citySearch.trim()) {
      fetchWeather(citySearch); 
    } else {
      setError('Please enter a valid city name');
    }
  };

  if (!city && !error) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <h1>Clima</h1>
      {city && (
        <section>
          <h1>Weather in {city.name}</h1>
          <p>Main: {city.weather[0].main}</p>
          <p>Description: {city.weather[0].description}</p>
          <p>Temperature: {kelvinToCelsius(city.main.temp)} °C</p>
          <p>Feels Like: {kelvinToCelsius(city.main.feels_like)} °C</p>
          <p>Wind Speed: {city.wind.speed} m/s</p>
          <p>Cloudiness: {city.clouds.all}%</p>
        </section>
      )}

      <div className="flex flex-row gap-y-4">
        <p>Buscar ciudad</p>
        <form onSubmit={submitCity} className="flex flex-col gap-x-3">
          <input
            type="text"
            required
            value={citySearch}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit">Buscar</button>
        </form>
      </div>
    </>
  );
}
