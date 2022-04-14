import styled from "styled-components";

import backgroudPokemon from '../../../assets/background4.png'

export const ContainerPokedexDetails = styled.div`
    width: 100vw;
    height: 100vh;

    margin: 0;
    padding: 0;

    background-image: url(${backgroudPokemon});
    background-repeat: no-repeat;
    background-size: cover;
`;

export const Container = styled.div`
    display: grid;
    
    grid-template-columns: 50px auto 500px auto 50px;
    grid-template-rows: 80px 150px 150px 150px 150px 100%;

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
    ;
`;

export const Header = styled.div`
    grid-area: HE;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #1db954;
    /* border: 1px solid black; */
    background-color: black;

    :hover{
        color: white;
    }


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
`;

export const Front = styled.div`
    grid-area: FT;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid white;
    color: white;
`;

export const Back = styled.div`
    grid-area: BA;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid white;

    color: white;
`;

export const Status = styled.div`
    grid-area: ST;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid white;
  
    .status-form{
        display: flex;
        flex-direction: column;
        border: 1px solid white;
        width: 100%;
        height: 90%;

        label{
            margin: 30px 15px;
            color: white;
        }
    }
`;

export const Type = styled.div`
    grid-area: TP;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid white;
    color: white;
`;

export const Move = styled.div`
    grid-area: MV;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid white;
    color: white;
`;