import React from "react";
import Header from "../../shared/Header/Header";
import { useNavigate } from "react-router-dom";
import { goToHomePage } from "../../constants/Navigation";
import styled from 'styled-components'

const ContainerHeader = styled.div`
display: flex;
direction: column;
align-items: center;
justify-content: space-around;
`

const Pokedex = () => {
    const navigate = useNavigate();

    return(
        <ContainerHeader>
            <p>Logo</p>
            <h1>Pokedex</h1>
            <button onClick={()=>{goToHomePage(navigate)}}> Home </button>
        </ContainerHeader>
    )
}
export default Pokedex;