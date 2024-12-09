'use client';
import "@/public/css/globals.css";

export default function Layout({ children }) {
  return (
    
      <html>
        <body className="bg-[url('/images/background.jpg')] bg-center h-screen bg-cover bg-no-repeat">
                    {children}
      </body>
      </html>
   
  );
}