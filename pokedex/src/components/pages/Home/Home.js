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
`;


// const Header = styled.div`
//     grid-area: HE;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     color: #1db954;
//     /* border: 1px solid black; */
//     background-color: black;

//     // :hover{
//     //     color: white;
//     // }


//     .header-left{
//         display: flex;
//         justify-content: start;
//         align-items: center;
//         /* border: 1px solid black; */
//         width: 250px;
//         height: 100%;
//         margin-left: 50px;
//     }

//     .header-right{
//         display: flex;
//         justify-content: end;
//         align-items: center;
//         /* border: 1px solid black; */
//         width: 250px;
//         height: 100%;
//         margin-right: 50px;
//     }
// `;

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
        <Header />

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