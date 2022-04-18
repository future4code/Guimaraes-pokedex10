import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ButtonTextFieldLabel } from "../ButtonTextField";
import { goToPokemonDetails } from "../../Navigation/Navigation";

const ContainerCard = styled.div`
grid-area: FT;
display: grid;
width: 250px;
border: 1px solid white;
color: white;
`

const ContainerButton = styled.div`
display: flex;
align-items: center;
justify-content: space-evenly;
`
const ContainerImg = styled.div`
display: flex;
align-items: center;
justify-content: space-evenly;
`

const CardPokemon = () => {
    const navigate = useNavigate();

    return(
        <>
        <ContainerCard>
            <ContainerImg>
                <h1>Pokemon</h1>
            </ContainerImg>
           
            <ContainerButton>
                <ButtonTextFieldLabel 
                    label={'Detalhes'}
                    height={'30px'}
                    radius={'30px'}
                    backgroundColor={'#1db954'}
                    onClick={()=>{goToPokemonDetails(navigate)}}/>
                <ButtonTextFieldLabel 
                    label={`Adicionar/ Remover`}
                    height={'30px'}
                    radius={'30px'}
                    backgroundColor={'#1db954'}
                    onClick={()=>{}}/>
            </ContainerButton>
        </ContainerCard>
        </>

    )
};

export default CardPokemon;