import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home";
import PokedexDetails from "../pages/Pokedex/PokedexDetails";

const Routers = () => {
    return(<BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/podekex/details" element={<PokedexDetails />} />
        </Routes>
    </BrowserRouter>)
}

export default Routers;