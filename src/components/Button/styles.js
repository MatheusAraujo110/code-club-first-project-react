import styled from "styled-components";

export const Button = styled.button`
width: 342px;
height: 74px;
margin-top: 85px;

font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 28px;

margin-bottom: 34px;
border: ${props => props.isBack ? '1px solid #fff' : 'none'};
border-radius: 14px;

background: ${props => props.isBack ? 'transparent' : 'rgba(0, 0, 0, 0.8)'};
color: #fff;

cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
gap: 20px;

&:hover{
    opacity: 0.8;
}

&:active{
    opacity: 0.4;
}

img {
    transform: ${props => props.isBack && 'rotateY(180deg)'};
}
`;
