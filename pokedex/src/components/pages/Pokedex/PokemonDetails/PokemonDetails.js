import React from "react";

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
import { useNavigate } from "react-router-dom";

const PokedexDetails = () => {
    const navigate = useNavigate()
    
    return(<S.ContainerPokedexDetails>
        <S.Container>
            {/* <S.Left>
                header Btn voltar
            </S.Left>

            <S.Center>
                heder title
            </S.Center>

            <S.Right>
                Adicionar/Remover da pokedex
            </S.Right> */}

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
                    <div>Nome do Pokemon</div>
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

            <S.Front>
                Imagem Frontal
            </S.Front>

            <S.Back>
                Back
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
                Type
            </S.Type>

            <S.Move>
                Moves
            </S.Move>

            <S.Footer>
            
                <img src={imgFooter18} alt={'background'} />
                {/* <img src={imgFooter17} alt={'background'} style={{ width: '200px', height: '140px' }}/>
                <img src={imgFooter16} alt={'background'} style={{ width: '200px', height: '140px' }}/>
                <img src={imgFooter15} alt={'background'} style={{ width: '200px', height: '140px' }}/>
                <img src={imgFooter14} alt={'background'} style={{ width: '200px', height: '140px' }}/>
                <img src={imgFooter13} alt={'background'} style={{ width: '200px', height: '140px' }}/>
                <img src={imgFooter12} alt={'background'} style={{ width: '200px', height: '140px' }}/>
                <img src={imgFooter11} alt={'background'} style={{ width: '200px', height: '140px' }}/> */}
            </S.Footer>

        </S.Container>
    </S.ContainerPokedexDetails>)
}
export default PokedexDetails;