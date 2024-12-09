import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Forecast from "@/pages/Forecast";
export default function Router(){
    return(
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/forecast" element={<Forecast />} />
            </Routes>
    )
}