'use client';
import { useState, useEffect } from 'react';
import Link from "next/link";
import LocationTest from '@/components/LocationTest';
import { useLocation } from '@/context/LocationContext';
import getDays from '@/services/getDays';
import kelvinToCelsius from '@/lib/utils';

export default function Forecast() {
  const { city, setCity } = useLocation();
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState(null);
  console.log("city ", city)
  useEffect(() => {
    if (city) {
      const fetchForecast = async () => {
        try {
          const response = await getDays(city);
          console.log(response)
          setForecast(response);
          console.log(forecast)
        } catch (err) {
          setError("No se pudo obtener el pronóstico.");
        }
      };
      fetchForecast();
    }
    else{
      const fetchForecast = async () => {
        try {
          const response = await getDays("Cali");
          console.log(response)
          setForecast(response);
          console.log(forecast)
        } catch (err) {
          setError("No se pudo obtener el pronóstico.");
        }
      };
      fetchForecast();
    }
  }, [city]);

  return (
        <div className="bg-custom-bg m-10 rounded-2xl">
      <h1 className="text-white font-bold text-4xl text-center">Pronóstico para los próximos días</h1>
      <div className='flex flex-row gap-x-10 mx-10 mb-4'>
        <h1 className='text-white'>CIUDAD </h1>
        <Link href="/">
          <button className="text-2xl font-bold hover:scale-105 transition-all duration-300">
            HOY
          </button>
        </Link>
        
          <button className="text-2xl font-bold hover:scale-105 transition-all duration-300">
            PRÓXIMOS DÍAS
          </button>
        
      </div>
      {forecast ? (
        <div>
          {forecast.list.map((item, index) => (
            <div key={index}>
              <p className='text-white'>{item.dt_txt}</p>
              <p className='text-white'>{kelvinToCelsius(item.main.temp)} °C</p>
              <p className='text-white'>{item.weather[0].description}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}