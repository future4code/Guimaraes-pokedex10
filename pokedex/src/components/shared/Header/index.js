import React from "react";
import { Container } from "./styles";
import { ButtonTextFieldLabel } from "../ButtonTextField";
import {goToPokedex, goBack, goToHomePage} from '../../Navigation/Navigation'
import { useNavigate } from "react-router-dom";


const Header = ({title, page, hidden=false}) => {
    const navigate = useNavigate();

    return(
    <Container className="header-container">
        
        <div className="header-center">
            <h1>{page? page : ""}</h1>
        </div>
        
        <div className="header-right">
        <ButtonTextFieldLabel 
            label={title? title: ""}
            height={'50px'}
            width={'210px'}
            radius={'30px'}
            backgroundColor={'#1db954'}
            onClick={()=>{ page === "Pokemon"? goToPokedex(navigate) : goBack(navigate) }}
        />
        </div>
    </Container>)
}
export default Header;