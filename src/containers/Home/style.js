import styled from "styled-components";
import Background from "../../assets/80172939587b8e392061c57ff5f5ec30.jpeg";
import {Link} from "react-router-dom";


export const Container = styled.div` 
background: url("${Background}");
background-size: cover;
display: flex;
flex-direction: column;
align-items: center;
gap: 40px;
`;

export const Image = styled.img`
margin-top: 25px;
`;

export const ContainerItens = styled.div`
background: linear-gradient(157.44deg,
    rgba(255, 255, 255, 0.6) 0.84%,
    rgba(255, 255, 255, 0.6) 0.85%,
    rgba(255, 255, 255, 0.15) 100%);
border-radius: 61px 61px 0px 0px;
padding: 20px 26px;
display: flex;
flex-direction: column;
height: 70vh;
`;

export const H1 = styled.h1`
font-style: normal;
font-weight:bold;
font-size:34px;
line-height:40px;
text-align: center;
color: #fff;
margin-bottom: 80px;
`;

export const InputLabel = styled.p`
font-weight: bold;
font-style: normal;
font-size: 18px;
line-height: 22px;
letter-spacing: -0.408px;
color: #fff;
margin-left: 25px;
`;

export const Input = styled.input`
background: rgba(225, 225, 225, 0.25);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 14px;
width: 342px;
height: 58px;
border: none;
outline: none;
padding-left: 25px;
color: #fff;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 28px;
margin-bottom: 34px;
`;

export const Button = styled(Link)`
width: 342px;
height: 74px;
margin-top: 85px;
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 28px;
margin-bottom: 34px;
border: none;
border-radius: 14px;
background: rgba(0, 0, 0, 0.8);
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
`;
