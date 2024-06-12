import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import Avatar from "../../assets/User Profile_Monochromatic 2.png";
import Arrow from "../../assets/seta.png";
import Trash from "../../assets/18297 4.png";

import { Container, H1, Image, ContainerItens, Button, User } from "../../containers/Users/style";
function Users() {
  // const users = [];
  const [users, setUsers] = useState([]);  //ESTADO => VARIÁVEL
  const navigate = useNavigate();


  useEffect(() => {
    async function fetchUsers() {
      const { data: newUsers } = await axios.get("http://localhost:3001/users");

      setUsers(newUsers);
    }

    fetchUsers()

  }, [])

  // REACT HOOK => useEffect (Efeito colateral)
  // A mimha aplicação inicia (A página carregou, useEffect é chamado!)
  // Quando um estado que está no array de dependência do useEffect é alterado

  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`)

    const newUsers = users.filter(user => user.id !== userId);

    setUsers(newUsers);
  }

  function goBackPage() {
    navigate('/');
  }

  return (
    <Container>
      <Image alt="logo-imagem" src={Avatar} />
      <ContainerItens>
        <H1>Usuários </H1>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}><img src={Trash} alt="lata-de-lixo" /></button>
            </User>
          ))}
        </ul>

        <Button onClick={goBackPage}>
          <img alt="seta" src={Arrow} />
          Voltar
        </Button>

      </ContainerItens>
    </Container>
  );
}

export default Users;