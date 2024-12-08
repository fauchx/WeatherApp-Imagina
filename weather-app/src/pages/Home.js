// src/app/home/page.js
'use client';

import { useState, useEffect } from 'react';
import kelvinToCelsius from '@/lib/utils';
import SearchCity from '@/components/SearchCity';
import useWeather from '@/services/fetchWeather'; 
import SearchIcon from '@/components/SearchIcon';
import Link from "next/link";
import { useLocation } from '@/context/LocationContext'; 
import LocationTest from '@/components/LocationTest';

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
    if (!city) {
      setCity(defaultCity); 
    }
  }, [city, setCity]);

  if (!weatherCity && !error) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }
  
  return (
    <div className='bg-custom-bg m-10 rounded-2xl'>
      <h1 className='text-white font-bold text-4xl text-center'>Clima</h1>
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
                HOY
              </button>
            </Link>
            <Link href="/Forecast">
              <button
                className={`text-2xl font-bold hover:scale-105 transition-all duration-300`}
              >
                PRÓXIMOS DÍAS
              </button>
            </Link>
          </div>
          <h1>Weather in {weatherCity.name}</h1>
          <LocationTest/>
          {weatherCity.weather && weatherCity.weather.length > 0 ? (
            <>
              <p>Main: {weatherCity.weather[0].main}</p>
              <p>Description: {weatherCity.weather[0].description}</p>
            </>
          ) : (
            <p>No weather information available.</p>
          )}
          {weatherCity.main && (
            <>
              <p>Temperature: {kelvinToCelsius(weatherCity.main.temp)} °C</p>
              <p>Feels Like: {kelvinToCelsius(weatherCity.main.feels_like)} °C</p>
            </>
          )}
          
          <SearchIcon icon={weatherCity.weather[0].icon} />
        </section>
      )}
    </div>
  );
}