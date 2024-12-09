"use client";
import React from "react";

import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home.jsx";
import Forecast from "@/pages/Forecast.jsx";

export default function Router() {
    
  return (
    <Routes>
      <Route path="/" element={<Home  />} />
      <Route path="/forecast" element={<Forecast />} />
    </Routes>
  );
}
