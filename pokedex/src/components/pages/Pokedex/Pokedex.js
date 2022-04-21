import React from "react";
import { ButtonTextFieldLabel } from "../../shared/ButtonTextField";
import Header from "../../shared/Header";
import CardPokemon from "../../shared/CardPokemon/CardPokemon";
import {goToHomePage, goToPokemonDetails, goBack} from '../../Navigation/Navigation'
import styled from "styled-components"

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

const Pokedex = () => {

    return(
        <ContainerGeral>
            <Header page="Pokedex" title="Home" />
            <Container>
                <CardPokemon/>
            </Container>
        </ContainerGeral>
        )
}
export default Pokedex;