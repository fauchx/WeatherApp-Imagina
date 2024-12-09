// app/page.js o el archivo que gestiona las rutas principales
'use client';

import "@/public/css/globals.css";
import React from "react";
import dynamic from "next/dynamic";
import { LocationProvider } from "@/context/LocationContext.jsx"; // Asegúrate de importar el contexto
import Router from "@/Router/Router";
const ClientRouter = dynamic(() => import("@/Router/ClientRouter"), {
  ssr: false, 
});

export default function Page() {
  return (
    <LocationProvider> 
      <ClientRouter>
        <Router /> 
      </ClientRouter>
    </LocationProvider>
  );
}
