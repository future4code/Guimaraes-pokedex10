import React from "react";

import * as S from './styles'


const ButtonTextFieldLabel = ({ label, width, height, radius, backgroundColor }) => {
    return(<S.Button width={width} height={height} radius={radius} backgroundColor={backgroundColor}>
            {label}
    </S.Button>)
}
export { ButtonTextFieldLabel };