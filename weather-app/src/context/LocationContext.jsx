// src/context/LocationContext.js
import React, { createContext, useContext, useState } from 'react';

// Crear el contexto para la ciudad
const cityContext = createContext(null);

// Proveedor del contexto
export const LocationProvider = ({ children }) => {
  const [city, setCity] = useState("Cali");

  return (
    <cityContext.Provider value={{ city, setCity }}>
      {children}
    </cityContext.Provider>
  );
};

// Hook personalizado para usar el contexto
export const useLocation = () => {
  const context = useContext(cityContext);
  if (!context) {
    throw new Error('useLocation debe ser usado dentro de un LocationProvider');
  }
  return context;
};
