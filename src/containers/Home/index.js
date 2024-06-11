import React, { useState, useRef, } from "react";

import axios from "axios";

import People from "../../assets/Consulting_Isometric 1.png";
import Arrow from "../../assets/seta.png";

import { Container, H1, Image, ContainerItens, InputLabel, Input, Button, } from "../../containers/Home/style";
function App() {
  // const users = [];
  const [users, setUsers] = useState([]);  //ESTADO => VARIÁVEL
  const inputName = useRef();
  const inputAge = useRef();

  async function addNewUser() {
    const { data: newUser } = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value,
      age: inputAge.current.value,
    });

    setUsers([...users, newUser]);

  }

  // REACT HOOK => useEffect (Efeito colateral)
  // A mimha aplicação inicia (A página carregou, useEffect é chamado!)
  // Quando um estado que está no array de dependência do useEffect é alterado


  return (
    <Container>
      <Image alt="logo-imagem" src={People} />
      <ContainerItens>
        <H1>Olá! </H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade" />

        <Button to="/usuarios" onClick={addNewUser}>Cadastrar <img alt="seta" src={Arrow} /></Button>
      </ContainerItens>
    </Container>
  );
}

export default App;