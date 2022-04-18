import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ButtonTextFieldLabel } from "../../shared/ButtonTextField";
import CardPokemon from "../../shared/CardPokemon/CardPokemon";
import {goToHomePage, goToPokemonDetails, goBack} from '../../Navigation/Navigation'
import styled from "styled-components"

const ContainerGeral = styled.div`
    width: 100vw;
    height: 100vh;

    margin: 0;
    padding: 0;

    background-color: black;
    background-repeat: no-repeat;
    background-size: cover;
`

const Container = styled.div`
    display: grid;
    
    grid-template-columns: 50px auto 500px auto 200px;
    grid-template-rows: 50px 100px 100px 100px 100px auto;

    grid-row-gap: 1.75em;
    grid-column-gap: 1.5em;

    //Lefet LF 
    //Center CE
    //Adcionar AD
    //Frontal FT
    //Back BA
    //Status ST
    //Type TP
    //Moves MV

    grid-template-areas: 
    'HE HE HE HE HE'
    '. FT ST TP .'
    '. FT ST MV .'
    '. BA ST MV .'
    '. BA ST MV .'
    'FO FO FO FO FO'
    ;
`

const Header = styled.div`
    grid-area: HE;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #1db954;
    /* border: 1px solid black; */
    background-color: black;

    // :hover{
    //     color: white;
    // }


    .header-left{
        display: flex;
        justify-content: start;
        align-items: center;
        /* border: 1px solid black; */
        width: 250px;
        height: 100%;
        margin-left: 50px;
    }

    .header-right{
        display: flex;
        justify-content: end;
        align-items: center;
        /* border: 1px solid black; */
        width: 250px;
        height: 100%;
        margin-right: 50px;
    }
`

const Pokedex = () => {
    const navigate = useNavigate()

    return(
        <ContainerGeral>
        <Container>
        <Header>
        <div className="header-left">
            <div>
                <ButtonTextFieldLabel 
                    label={'Voltar'} 
                    height={'30px'}
                    radius={'30px'}
                    backgroundColor={'#1db954'}
                    onClick={()=>{goBack(navigate)}}
                />
            </div>
        </div>

        <div className="header-center">
            <h1>Pokedex</h1>
        </div>

        <div  className="header-right">
            <div>
                <ButtonTextFieldLabel 
                    label={'Home'} 
                    height={'30px'}
                    width={'210px'}
                    radius={'30px'}
                    backgroundColor={'#1db954'}
                    onClick={()=>{goToHomePage(navigate)}}
                />
            </div>
        </div>
        
    </Header>
    <CardPokemon/>
    </Container>
    </ContainerGeral>
        )
}
export default Pokedex;