import React from "react";
import Header from "../../../shared/Header/Header"
import styled from "styled-components"

const PokemonDetails = () => {

    const ContainerHeader = styled.div`
        display: flex;
        direction: column;
        align-items: center;
        justify-content: space-around;
        `

    return(
        <ContainerHeader>
            <Header />
        </ContainerHeader>
    )
}
export default PokemonDetails;