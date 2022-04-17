import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home";
import PokedexDetails from "../pages/Pokedex/PokedexDetails";
import Mock from "../mock";

const Routers = () => {
    return(<BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/podekex/details" element={<PokedexDetails />} />
            <Route path="/mock" element={<Mock />} />
        </Routes>
    </BrowserRouter>)
}

export default Routers;