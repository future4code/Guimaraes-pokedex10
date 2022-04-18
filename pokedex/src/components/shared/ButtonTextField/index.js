import React from "react";

import * as S from './styles'


const ButtonTextFieldLabel = ({ label, width, height, radius, backgroundColor, onClick }) => {
    return(<S.Button width={width} height={height} radius={radius} backgroundColor={backgroundColor} onClick={onClick}>
            {label}
    </S.Button>)
}
export { ButtonTextFieldLabel };