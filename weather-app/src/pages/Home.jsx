'use client';

import { useState, useEffect, useContext } from 'react';
import kelvinToCelsius,{ convertToGMTMinus5} from '@/lib/utils';
import SearchCity from '@/components/SearchCity';
import useWeather from '@/services/fetchWeather'; 
import SearchIcon from '@/components/SearchIcon';
import Link from "next/link";
//import LocationContext from '@/context/LocationContext';
import { useLocation } from '@/context/LocationContext'; // Usamos el contexto

export default function Home() {
  const [citySearch, setSearch] = useState(""); 
  const { city, setCity } = useLocation(); 
  const defaultCity = "Cali"; 
  const { city: weatherCity, error } = useWeather(city || defaultCity);  

  const submitCity = (cityToSearch) => {
    if (cityToSearch.trim()) {
      setCity(cityToSearch);  
    }
  };

  useEffect(() => {
    // Solo establece la ciudad predeterminada si city es null o una cadena vacía
    if (!city) {
      setCity(defaultCity);
    }
    console.log("City before update:", city);  // Depuración
  }, [city, setCity]);
  

  if (!weatherCity && !error) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }
  console.log(weatherCity)
  return (
    <div className='bg-custom-bg bg-opacity-60 m-10 rounded-2xl'>
      
      <SearchCity 
        citySearch={citySearch} 
        setSearch={setSearch} 
        onSubmit={submitCity} 
      />
  
      {weatherCity && (
        <section className='text-gray-200 inline-block p-4 flex-col'>
          
          <div className='flex flex-row gap-x-10 mx-10 mb-4'>
            <Link href="/">
              <button
                className={`text-2xl font-bold hover:scale-105 transition-all duration-300`}
              >
                TODAY
              </button>
            </Link>
            <Link href="/Forecast">
              <button
                className={`text-2xl font-bold hover:scale-105 transition-all duration-300`}
              >
                NEXT WEEK
              </button>
            </Link>
          </div>
  
          {weatherCity.weather && weatherCity.weather.length > 0 ? (
            <div className='flex flex-row justify-around p-10 align-middle'>
              
              <section className='flex flex-col p-4 m-2 gap-4'>
                <h1 className='text-3xl font-semibold text-white'>
                  {weatherCity.name}, {weatherCity.sys.country}
                </h1>
                <SearchIcon icon={weatherCity.weather[0].icon} />
                <p className='text-xl'>
                  Temperature: {kelvinToCelsius(weatherCity.main.temp)} °C
                </p>
              </section>
  
              <section className='grid grid-cols-3 px-8 m-2 gap-4 w-1/2 bg-neutral-800 bg-opacity-20 items-center rounded-lg text-white'>
                <>
                  <p>Description: {weatherCity.weather[0].description}</p>
                  <p>Humidity: {weatherCity.main.humidity} %</p>
                  <p>Sunrise: {convertToGMTMinus5(weatherCity.sys.sunrise)}</p>
                  <p>Sunset: {convertToGMTMinus5(weatherCity.sys.sunset)}</p>
                  {weatherCity.main && (
                  <>
                    <p>Feels Like: {kelvinToCelsius(weatherCity.main.feels_like)} °C</p>
                    <p>Wind Speed: {weatherCity.wind.speed} m/s</p>
                  </>
                )}
                </>
              </section>
            </div>
          ) : (
            <p className='col-span-3 text-center text-3xl flex justify-center items-center'>
  No weather information available.
</p>

          )}
  
        </section>
      )}
    </div>
  );
  
}
