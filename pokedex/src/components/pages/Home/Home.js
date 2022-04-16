import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
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

    return(
        <ContainerHeader>
            <Header />
        </ContainerHeader>)
}
export default Home;