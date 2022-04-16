import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home/Home";
import Pokedex from "../pages/Pokedex/Pokedex"
import PokedexDetails from "../pages/Pokedex/PokedexDetails/PokedexDetails";
import Error from "../pages/Error/Error"

const Routers = () => {
    return(<BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokedex" element={<Pokedex />} />
            <Route path="/pokedex/details" element={<PokedexDetails />} />
            <Route path="*" element={<Error />} />
        </Routes>
    </BrowserRouter>)
}

export default Routers;