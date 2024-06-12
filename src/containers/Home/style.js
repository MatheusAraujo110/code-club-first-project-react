import styled from "styled-components";
import Background from "../../assets/80172939587b8e392061c57ff5f5ec30.jpeg";


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

export const Button = styled.button`
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
