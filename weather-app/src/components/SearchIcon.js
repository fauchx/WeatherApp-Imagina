export default function SearchIcon({icon}){
    const icons = {
        "01d":"/images/01d.png",
        "01n":"/images/01n.png",
        "02d":"/images/02d.png",
        "02n":"/images/02n.png",
        "03d":"/images/03d.png",
        "03n":"/images/03n.png",
        "04d":"/images/04d.png",
        "04n":"/images/04n.png",
        "09d":"/images/09d.png",
        "09n":"/images/09n.png",
        "10d":"/images/10d.png",
        "10n":"/images/10n.png",
        "11d":"/images/11d.png",
        "11n":"/images/11n.png",
        "13d":"/images/13d.png",
        "13n":"/images/13n.png",
        "50d":"/images/50d.png",
        "50n":"/images/50n.png",
    }
    const iconShow = icons[icon]

    return(
        <img src={iconShow} className="scale-95 flex flex-1" alt="iconWeather"/>
    )
}