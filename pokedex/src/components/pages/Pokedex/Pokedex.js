import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ButtonTextFieldLabel } from "../../shared/ButtonTextField";
import {goToPokedex, goToPokemonDetails, goBack} from '../../Navigation/Navigation'
import styled from "styled-components"


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
        <div>
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
            <div>Nome do Pokemon</div>
        </div>

        <div  className="header-right">
            <div>
                <ButtonTextFieldLabel 
                    label={'Pokedex'} 
                    height={'30px'}
                    width={'210px'}
                    radius={'30px'}
                    backgroundColor={'#1db954'}
                    onClick={()=>{goToPokedex(navigate)}}
                />
            </div>
        </div>
        
    </Header>
    </div>
        )
}
export default Pokedex;