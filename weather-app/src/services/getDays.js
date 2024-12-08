import { getApiDays } from "@/utils";
export default async function getDays(city) {
    try {
        console.log(city)
        const response = await fetch(getApiDays(city))
        const data = await response.json()
        return data
    } catch (error) {
        
    }
}