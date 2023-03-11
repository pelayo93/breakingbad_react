import styled from "@emotion/styled";
import { Fragment, useEffect, useState } from "react";
import Frase from "./components/Frase.jsx";
import "./App.css";

const Boton = styled.button`
  background: -webkit-linear-gradient(
    top left,
    #007d35 0%,
    #007d35 40%,
    #0f574e 100%
  );
  background-size: 300px;
  font-family: Arial, Herlvetica, sans-serif;
  color: #fff;
  margin-bottom: 35px;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size 0.8s ease;

  &:hover {
    background: #0f574e;
    background-size: 400px;
    cursor: pointer;
  }
`;

const Contenedor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
`;
const FraseContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;

function App() {
  const [frase, guardarFrase] = useState({});

  const consultarApi = async () => {
    const api = await fetch("https://api.breakingbadquotes.xyz/v1/quotes");
    const frase = await api.json();
    guardarFrase(frase[0]);
  };

  // Cargar una Frase
  useEffect(() => {
    consultarApi();
  }, []);

  return (
    <Fragment>
      <Contenedor>
        <FraseContainer>
          <Frase frase={frase} />
        </FraseContainer>
        <div style={{ marginTop: 'auto' }}>
          <Boton onClick={consultarApi}>Obtener Frase</Boton>
        </div>
      </Contenedor>
    </Fragment>
  );
}

export default App;