import React from "react";

import { ButtonTextFieldLabel } from "../../../shared/ButtonTextField";

import  * as S  from "./styles";

const PokedexDetails = () => {
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
                        />
                    </div>
                </div>

                <div className="header-center">
                    <div>Nome do Pokemon</div>
                </div>

                <div  className="header-right">
                    <div>
                        <ButtonTextFieldLabel 
                            label={'Adiciobar/Remover da pokedex'} 
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
                Projeto Labenu Pokedex
            </S.Footer>

        </S.Container>
    </S.ContainerPokedexDetails>)
}
export default PokedexDetails;