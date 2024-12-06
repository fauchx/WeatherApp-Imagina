import { API_URL } from "@/utils";

export default async function getData () {
    try{
        const response = await fetch(API_URL)
        const data = await response.json();
        console.log(data.weather);
        console.log(data.main)
    }
    catch (error){
    }
}