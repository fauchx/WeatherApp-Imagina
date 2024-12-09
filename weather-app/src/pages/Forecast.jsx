'use client';

import { useState, useEffect, useContext } from "react";
import Link from "next/link";
//import { useLocation } from "@/context/LocationContext"; // Usamos el contexto
import getDays from "@/services/getDays";
import kelvinToCelsius from "@/lib/utils";
//import LocationContext from "@/context/LocationContext";
//import { useLocation } from '@/context/LocationContext.jsx';

export default function Forecast() { 
  //const { city } = useLocation();
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchForecast = async () => {
      try {
        const cityToFetch =  "Cali"; 
        console.log(cityToFetch)
        const response = await getDays(cityToFetch);
        setForecast(response);
      } catch (err) {
        console.error(err);
        setError("No se pudo obtener el pronóstico.");
      }
    };

    fetchForecast();
  }, []);

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="bg-custom-bg m-10 rounded-2xl">
      <h1 className="text-white font-bold text-4xl text-center">
        Pronóstico para los próximos días 
      </h1>
      <div className="flex flex-row gap-x-10 mx-10 mb-4">
        <h1 className="text-black"></h1>
        <Link href="/">
          <button className="text-2xl font-bold hover:scale-105 transition-all duration-300">
            HOY
          </button>
        </Link>
        <Link href="/forecast">
          <button className="text-2xl font-bold hover:scale-105 transition-all duration-300">
            PRÓXIMOS DÍAS
          </button>
        </Link>
      </div>
      {forecast ? (
        <div>
          {forecast.list.map((item, index) => (
            <div key={index} className="text-white">
              <p>{item.dt_txt}</p>
              <p>{kelvinToCelsius(item.main.temp)} °C</p>
              <p>{item.weather[0].description}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-white">Cargando...</p>
      )}
    </div>
  );
}
