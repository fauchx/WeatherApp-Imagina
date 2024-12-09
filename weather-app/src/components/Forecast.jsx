'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import getDays from "@/services/getDays"; 
import kelvinToCelsius from "@/lib/utils"; 
import { useLocation } from '@/context/LocationContext'; 

export default function ForecastComponent() { 
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState(null);
  const { city } = useLocation(); 

  useEffect(() => {
    const fetchForecast = async () => {
      try {
        const cityToFetch = city || "Cali"; 
        console.log("Fetching forecast for:", cityToFetch); 
        const response = await getDays(cityToFetch); 
        setForecast(response)
      } catch (err) {
        console.error(err);
        setError("No se pudo obtener el pronóstico.");
      }
    };

    
    if (city) {
      fetchForecast();
    }
  }, [city]); 
  console.log("Forecast", forecast)
  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="forecast-container">
      {forecast ? (
        <>
          <h1 className="text-black text-3xl">{forecast.city.name}</h1>
          
          <div className="forecast-details text-black">
            {/* Verificar si forecast.weather y forecast.weather[0] existen */}
            {forecast.weather && forecast.weather.length > 0 ? (
              <>
                <p>Descripción: {forecast.weather[0].description}</p>
                <p>Temperatura: {kelvinToCelsius(forecast.main.temp)}°C</p>
                {/* Agregar más detalles de acuerdo a la estructura de la respuesta de la API */}
              </>
            ) : (
              <p>No hay información de pronóstico disponible.</p>
            )}
          </div>
  
          <div className="navigation-links mt-6">
            <Link href="/">
              <button className="text-2xl font-bold hover:scale-105 transition-all duration-300">
                TODAY
              </button>
            </Link>
            <Link href="/forecast">
              <button className="text-2xl font-bold hover:scale-105 transition-all duration-300">
                NEXT WEEK
              </button>
            </Link>
          </div>
        </>
      ) : (
        <p className="text-center text-xl text-black">Cargando pronóstico...</p>
      )}
    </div>
  );
  
  
}
