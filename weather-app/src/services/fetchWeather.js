import { useState, useEffect } from 'react';
import getData from '@/services/getData';

export default function useWeather(cityName) {
  const [city, setCity] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const data = await getData(cityName);
        setCity(data);
        setError(null);
      } catch (err) {
        setError('Error fetching weather data');
        setCity(null);
      }
    };

    fetchWeather();
  }, [cityName]); 
  return { city, error };
}
