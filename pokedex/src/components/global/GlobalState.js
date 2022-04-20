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
    const [pokemonDetails, setPokemonDetails] = useState([]);
    const [icon, setIcon] = useState('');

    //Get top 20 pokemon and give the url to get next page
    const getPokemon = () => {
        setIsLoading(true);
        axios.get(`${pokedex.BASE_URL}pokemon`)
        .then(( response )=> { 
            if(response.data.results.length > 0 ){
                response.data.results.map((pk)=>{
                    axios.get(pk.url)
                    .then((res)=>{
                        const pokemonData = pokemonDetails;
                        
                        const data = {
                            name: pk.name,
                            url: pk.url,
                            urlIcon: res.data.sprites.other.dream_world.front_default
                        }                        

                        if(!pokemonDetails.some(pokem => pokem.name === data.name)){
                            pokemonData.push(data);
                            setPokemonDetails([pokemonData]);
                        }
                       
                    })
                    .catch((e)=>{ console.log("erro detalhe pk:", e)})
                })
            }


                setPokemon(response.data.results); 
                setNextPage(response.data.next)
                setPageBack(response.data.previous);
                setTotalPage(response.data.count);
                console.log("getPokemon: ", response)
        })
        .catch((e) => setError(e) )
        .finally(setIsLoading(false));
    }

    // const getIcon = ( urlDetails, pokemonName ) => {
    //     let iconUrl = ''
    //     axios.get(urlDetails)
    //     .then((response)=> {  
    //         iconUrl = response.data.sprites.other.dream_world.front_default;                   
    //         console.log("getIcon:", response.data.sprites.other.dream_world.front_default );
            
    //         const data = {
    //             name: pokemonName,
    //             url: urlDetails,
    //             urlFront: response.data.sprites.other.dream_world.front_default
    //         }

    //         setIcon(response.data.sprites.other.dream_world.front_default);
    //     })
    //     .catch((e)=> {console.log("Error: ", e)} )
    // }

     //My group states to send to the provider
     const states = { pokemon, isLoading, error, icon, pokemonDetails  }
     const setters = { setPokemon, setIsLoading, setError }
     const requests = { getPokemon }

    return(
    <GlobalStateContext.Provider value={{ states, setters, requests }}>
        {props.children}
    </GlobalStateContext.Provider>
    )
}

export default GlobalState;