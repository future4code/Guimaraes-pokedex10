import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home/Home";
import Pokedex from "../pages/Pokedex/Pokedex"
import PokemonDetails from "../pages/Pokedex/PokemonDetails/PokemonDetails";
import Error from "../pages/Error/Error"

const Routers = () => {
    return(<BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokedex" element={<Pokedex />} />
            <Route path="/pokemon/detail" element={<PokemonDetails />} />
            <Route path="*" element={<Error />} />
        </Routes>
    </BrowserRouter>)
}

export default Routers;