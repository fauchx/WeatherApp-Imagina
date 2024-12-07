import { useState } from 'react';
import kelvinToCelsius from '@/lib/utils';
import SearchCity from '@/components/SearchCity';
import useWeather from '@/services/fetchWeather'; 
import SearchIcon from '@/components/SearchIcon';

export default function Home() {
  const [citySearch, setSearch] = useState(""); 
  const [searchCity, setSearchCity] = useState("");

  const { city, error } = useWeather(searchCity.trim() === "" ? "Cali" : searchCity); 
  
  const submitCity = (cityToSearch) => {
    setSearchCity(cityToSearch); 
  };

  if (!city && !error) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }
  console.log(city.weather[0].icon)
  return (
    <div className='bg-custom-bg m-10 rounded-2xl'>
      <h1 className='text-white font-bold text-4xl text-center'>Clima</h1>
      <SearchCity 
        citySearch={citySearch} 
        setSearch={setSearch} 
        onSubmit={submitCity} 
      />
      {city && (
        <section className='text-gray-200'>
          <h1>Weather in {city.name}</h1>
          {city.weather && city.weather.length > 0 ? (
            <>
              <p>Main: {city.weather[0].main}</p>
              <p>Description: {city.weather[0].description}</p>
            </>
          ) : (
            <p>No weather information available.</p>
          )}
          {city.main && (
            <>
              <p>Temperature: {kelvinToCelsius(city.main.temp)} °C</p>
              <p>Feels Like: {kelvinToCelsius(city.main.feels_like)} °C</p>
            </>
          )}
          {city.wind && <p>Wind Speed: {city.wind.speed} m/s</p>}
          {city.clouds && <p>Cloudiness: {city.clouds.all}%</p>}
          
          <SearchIcon icon={city.weather[0].icon}/>
        </section>
      )}
    </div>
  );
}
