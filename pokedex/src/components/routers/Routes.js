import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home/Home";
import PokemonDetails from "../pages/Pokedex/PokemonDetails/PokemonDetails";
import Pokedex from "../pages/Pokedex/Pokedex"
import Mock from "../mock";
import ErrorPage from "../pages/Error/ErrorPage";

const Routers = () => {
    return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokemon/details/:id" element={<PokemonDetails />} />
            <Route path="/pokedex" element={<Pokedex />} />
            <Route path="/mock" element={<Mock />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    </BrowserRouter>)
}

export default Routers;