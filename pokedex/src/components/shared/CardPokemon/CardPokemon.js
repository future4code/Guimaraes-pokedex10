import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ButtonTextFieldLabel } from "../ButtonTextField";
import {goToPokedex, goToPokemonDetails, goBack} from '../../Navigation/Navigation';

const ContainerCard = styled.div`
    display: flex;
    flex-direction: column;
    height: 350px;
    margin: 20px;    
    border: 1px solid white;
    justify-content: center;
    align-items: center;

    .card-img{
        display: flex;
        border: 1px solid white;
        height: 100%;
        width: 100%;
        align-items: center;
        justify-content: center;
        color: white;
    }

    .card-footer{
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: 10px 0;
    }

`

const CardPokemon = ({ title }) => {
    const navigate = useNavigate();

    return(
        <ContainerCard>
            <div  className="card-img">
                <h1>{title}</h1>
            </div>
           <div className="card-footer">
                <div>
                    <ButtonTextFieldLabel 
                        label={'Detalhe'} 
                        height={'50px'}
                        width={'130px'}
                        radius={'30px'}
                        backgroundColor={'#1db954'}
                        onClick={()=>{goToPokemonDetails(navigate)}}
                    />
                </div>
                <div>
                    <ButtonTextFieldLabel 
                        label={'Adicionar'} 
                        height={'50px'}
                        width={'130px'}
                        radius={'30px'}
                        backgroundColor={'#1db954'}
                        onClick={()=>{goToPokedex(navigate)}}
                    />
                </div>
           </div>
        </ContainerCard>
    )
};

export default CardPokemon;