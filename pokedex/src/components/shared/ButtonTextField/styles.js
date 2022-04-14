import styled from "styled-components";

export const Button = styled.button`
    width: ${props => props.width? props.width : '100px' };
    height: ${props => props.height? props.height : '40px' };
    border-radius: ${props => props.radius? props.radius : '5px' };
    margin: 5px;
    background-color: ${props => props.backgroundColor? props.backgroundColor : '' };
    border-style: none;

    :hover{
        color: white;
        cursor: pointer;
    }
`;