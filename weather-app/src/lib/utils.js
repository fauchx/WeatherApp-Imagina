export default function kelvinToCelsius(kelvin) {
    return (kelvin - 273.15).toFixed(1); 
  }
export  function convertToGMTMinus5(timestampUTC) {
    const dateUTC = new Date(timestampUTC * 1000);
  
    const gmtMinus5Date = new Date(dateUTC.getTime() - 5 * 60 * 60 * 1000);
  
    return gmtMinus5Date.toLocaleString("en-US", { 
      timeZone: "America/Bogota", 
      dateStyle: "long",
      timeStyle: "medium"
    })
  }