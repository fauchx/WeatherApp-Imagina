export function getApiUrl(city) {
    const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
    return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
  }

  export function getApiDays(city) {
    const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`
    return url;
}
