import React, { useContext, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ButtonTextFieldLabel } from "../../shared/ButtonTextField";
import CardPokemon from "../../shared/CardPokemon/CardPokemon";
import {goToPokedex, goToPokemonDetails, goBack} from '../../Navigation/Navigation'
import styled from "styled-components"

import GlobalStateContext from "../../global/GlobalStateContext";

import Header from "../../shared/Header";

const ContainerGeral = styled.div`
    width: 100%;
    height: 100vh;

    margin: 0;
    padding: 0;

`

const Container = styled.div`
    display: grid;
    
    grid-template-columns: 350px 350px 350px 350px;
    grid-template-rows:  auto; //350px 350px 350px 350px 350px 350px;
    /* grid-gap: 10px; */
    /* border: 1px solid red; */

    justify-content: space-around;
    align-items: center;
    `

const Home = () => {
    const navigate = useNavigate();

    const { states, setters, requests } = useContext(GlobalStateContext);
    const { pokemon, isLoading, error, icon, pokemonDetails } = states;
    const { getPokemon, getIcon } = requests; 

    useEffect(()=>{
        getPokemon();
    },[])


    // console.log("pokemon", pokemon);
    console.log("pokemonDetails", pokemonDetails);

    return(
    <ContainerGeral>
        <Header page="Pokemon" title="Pokedex"/>

        <Container>
            {error? 'Ocorreu um erro' : isLoading? 'Carregando' : pokemonDetails[0]?.map((pk, index)=>{
                return(
                    <CardPokemon 
                        key={index}
                        title={pk.name}
                        icon={pk.urlIcon}
                    />
            )})}
        </Container>
    </ContainerGeral>
    )
}
export default Home; 