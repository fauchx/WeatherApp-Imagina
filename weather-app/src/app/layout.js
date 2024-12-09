'use client';
import { LocationProvider } from "@/context/LocationContext";
import "@/public/css/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[url('/images/background.jpg')] bg-center h-screen bg-cover bg-no-repeat">
        
          {children}
       
      </body>
    </html>
  );
}