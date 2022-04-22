import React, { useContext, useEffect, useState } from "react";

import { ButtonTextFieldLabel } from "../../../shared/ButtonTextField";
import { goBack } from "../../../Navigation/Navigation";
import imgFooter18 from  '../../../assets/background18.png'
import imgFooter17 from  '../../../assets/background17.png'
import imgFooter16 from  '../../../assets/background16.png'
import imgFooter15 from  '../../../assets/background15.png'
import imgFooter14 from  '../../../assets/background14.png'
import imgFooter13 from  '../../../assets/background13.png'
import imgFooter12 from  '../../../assets/background12.png'
import imgFooter11 from  '../../../assets/background11.png'

import  * as S  from "./styles";
import { useNavigate, useParams } from "react-router-dom";
import GlobalStateContext from "../../../global/GlobalStateContext";

const PokedexDetails = () => {
    const navigate = useNavigate();
    const [pokemonSkill, setPokemonSkill] = useState([]);
    
    const { states }  = useContext(GlobalStateContext);
    const { pokemonDetails } = states;
    let { id } = useParams();
    

    useEffect(()=>{
        setPokemonSkill(pokemonDetails[0].filter( pk => pk.id === parseInt(id)));
    },[])
   
    console.log("skill",  pokemonSkill);

    return(<S.ContainerPokedexDetails>
        <S.Container>
            <S.Header>
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
                    <div>{pokemonSkill.name}</div>
                </div>

                <div  className="header-right">
                    <div>
                        <ButtonTextFieldLabel 
                            label={'Adicionar/Remover da pokedex'} 
                            height={'30px'}
                            width={'210px'}
                            radius={'30px'}
                            backgroundColor={'#1db954'}
                        />
                    </div>
                </div>
                
            </S.Header>

            { pokemonSkill.map((pk, index)=>{
                return(<>
                    <S.Front key={index}>
                     <img  src={pk.urlFront}/>
                    </S.Front>

                    <S.Back>
                        <img  src={pk.urlBack}/>
                    </S.Back>

                    <S.Status>
                    <h2>Status</h2>

                    <div className="status-form">
                        <label>HP: 46</label>
                        <label>attack: 39</label>
                        <label>defense: 52</label>
                        <label>special-attack: 43</label>
                        <label>special-defense: 54</label>
                        <label>speed: 54</label>
                    </div>
                    
                </S.Status>

                <S.Type>
                    { pk.types.map((t,index) =>{
                        return(<div className="types-name">
                                <strong key={index}>{t.type.name}</strong>
                            </div>)
                    })}
                </S.Type>

                <S.Move>
                    <label>Principais ataques</label>
                    {pk.moves.map((mv, index)=>{
                        return(<div className="moves-name">
                        <strong key={index}>{mv.move.name }</strong>
                    </div>)
                    })}
                </S.Move>


                </>)
            })}
            <S.Footer>
                <img src={imgFooter18} alt={'background'} />
            </S.Footer>

        </S.Container>
    </S.ContainerPokedexDetails>)
}
export default PokedexDetails;