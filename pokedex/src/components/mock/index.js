import React, { useState } from "react";

import { useRequestData } from "../hooks";
import { pokedex } from "../data";


const Mock = () =>{
    const [pokemon, setPokemon]= useState([]);
    const [nextPage, setNextPage] = useState('');


    const [data, isLoading, error ] = useRequestData(`${pokedex.BASE_URL}pokemon`,[]);
    
    return(<>
       {isLoading? "Carregando...." : data.map((dt)=>{
           return(<>
            <p>{dt.resutls}</p>
           </>)
       })}
    </>)
}

export default Mock;