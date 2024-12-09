'use client'; 

import "@/public/css/globals.css"; 
import React from "react";
import { LocationProvider } from "@/context/LocationContext.jsx"; 
import Home from "@/pages/Home"; 
import Forecast from "@/pages/Forecast";
import Layout from "./layout";

export default function Page() {
  return (
    <LocationProvider> 
      <Layout>
       <Home/> 
      </Layout>
    </LocationProvider>
  );
}
