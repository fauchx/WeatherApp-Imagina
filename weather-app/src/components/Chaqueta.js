import { useLocation } from '@/context/LocationContext'; // Usamos el contexto

export default function Chaqueta(){
    const { city, setCity } = useLocation(); 
    console.log(city)
    return(
        <h1>{city}</h1>
    )
}