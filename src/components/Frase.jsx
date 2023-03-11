// rfce
import React from "react";
import styled from "@emotion/styled";
import PropTypes from 'prop-types'


const ContenerdorFrase = styled.div`
  padding: 3rem;
  border-radius: .5rem;
  background-color: #fff;
  max-width: 900px;
  @media (min-width: 1500px) {
    margin-top: 95%;
  }
  @media (min-height: 700px) {
    margin-top: 19rem;
  }

  h1 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 23px;
    text-align: center;
    position: relative;
    padding-left: 4rem;
    

    &::before {
      content: open-quote;
      font-size: 10rem;
      color: black;
      position: absolute;
      left: -1rem;
      top: -2rem;
    }
  }

  p {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1.4rem;
    font-weight: bold;
    text-align: right;
    color: #666;
    margin-top: 2rem;
  }
`;

function Frase({ frase }) {
  if (Object.keys(frase).length === 0) return null;
  

  return (
    <ContenerdorFrase>
      <h1> {frase.quote} </h1>
      <p> {frase.author} </p>
    </ContenerdorFrase>
  );
}

Frase.propType = {
    frase: PropTypes.object.isRequired
}

export default Frase;
