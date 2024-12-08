// src/app/test/LocationTest.js
'use client';

import { useLocation } from '@/context/LocationContext';

export default function LocationTest() {
  const { city } = useLocation();
  return <div>Ciudad actual: {city}</div>;
}