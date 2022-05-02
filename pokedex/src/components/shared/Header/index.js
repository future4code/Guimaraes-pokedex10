import React from "react";
import { Container } from "./styles";
import { ButtonTextFieldLabel } from "../ButtonTextField";
import {goToPokedex, goToPokemonDetails, goBack} from '../../Navigation/Navigation'
import { useNavigate } from "react-router-dom";


const Header = () => {
    const navigate = useNavigate();

    return(
    <Container className="header-container">
        <div className="header-left">
            <ButtonTextFieldLabel 
                label={'Voltar'} 
                height={'50px'}
                radius={'30px'}
                width={'210px'}
                backgroundColor={'#1db954'}
                onClick={()=>{goBack(navigate)}}
            />
        </div>
        
        <div className="header-center">
            <h1>Pokemons</h1>
        </div>
        
        <div className="header-right">
        <ButtonTextFieldLabel 
            label={'Pokedex'} 
            height={'50px'}
            width={'210px'}
            radius={'30px'}
            backgroundColor={'#1db954'}
            onClick={()=>{goToPokedex(navigate)}}
        />
        </div>
    </Container>)
}
export default Header;