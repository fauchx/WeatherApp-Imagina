'use client';
import { LocationProvider } from "@/context/LocationContext";
import "@/public/css/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-neutral-800">
        <LocationProvider>
          {children}
        </LocationProvider>
      </body>
    </html>
  );
}