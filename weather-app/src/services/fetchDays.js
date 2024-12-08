import { useState, useEffect } from 'react';
import getDays from '@/services/getDays';
export default function useDays(cityName) {
  const [city, setCity] = useState(null);
  const [error, setError] = useState(null);
  const fetchDays = async () =>{
    const data = await getDays(cityName);
    setCity(data);
    setError(null)
  }
  fetchDays()
   
  return {city, error};
}
