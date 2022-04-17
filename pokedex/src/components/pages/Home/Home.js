import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {goToPokedex, goToPokemonDetails} from '../../constants/Navigation'
import Button from "../../shared/Button/Button";
import Header from "../../shared/Header/Header";
import styled from "styled-components"

const ContainerHeader = styled.div`
display: flex;
direction: column;
align-items: center;
justify-content: space-around;
`

const Home = () => {
    const navigate = useNavigate();

    return(
        <ContainerHeader>
            <p>Logo</p>
            <h1>PokeLab</h1>
            <button onClick={()=>{goToPokedex(navigate)}}> Pokedex </button>
        </ContainerHeader>)
}
export default Home;