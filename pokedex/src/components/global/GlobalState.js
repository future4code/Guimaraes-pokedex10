import axios from "axios";
import React, { useState } from "react";
import GlobalStateContext from "./GlobalStateContext";
import { pokedex } from "../data";

const GlobalState = (props) => {
    
    //My global states
    const [pokemon, setPokemon] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [nextPage, setNextPage] = useState('');
    const [pageBack, setPageBack] = useState('');
    const [totalPage, setTotalPage] = useState(0);

    //Get top 20 pokemon and give the url to get next page
    const getPokemon = () => {
        setIsLoading(true);
        axios.get(`${pokedex.BASE_URL}pokemon`)
        .then(( response )=> { 
                setPokemon(response.data.results); 
                setNextPage(response.data.next)
                setPageBack(response.data.previous);
                setTotalPage(response.data.count);
                console.log("data: ", response)
        })
        .catch((e) => setError(e) )
        .finally(setIsLoading(false));
    }

     //My group states to send to the provider
     const states = { pokemon, isLoading, error }
     const setters = { setPokemon, setIsLoading, setError }
     const requests = { getPokemon }

    return(
    <GlobalStateContext.Provider value={{ states, setters, requests }}>
        {props.children}
    </GlobalStateContext.Provider>
    )
}

export default GlobalState;