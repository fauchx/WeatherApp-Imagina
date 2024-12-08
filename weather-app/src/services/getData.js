import {  getApiUrl } from "@/utils";

export default async function getData (city) {
    try{
        console.log(city)
        const response = await fetch(getApiUrl(city))
        const data = await response.json();
        return data
    }
    catch (error){
    }
}