'use client';
import "@/public/css/globals.css"; 
import Layout from "@/app/layout";
import { LocationProvider } from "@/context/LocationContext";
import ForecastComponent from "@/components/Forecast";

export default function Forecast() { 
 
  return (
    <LocationProvider>
      <ForecastComponent/>
    </LocationProvider>
   
  );
}
