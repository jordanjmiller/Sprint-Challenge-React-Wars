import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Button = (props) => {
  
    const StyledButton = styled.button`
    padding: 10px 10px;
    margin: 5px;
    border: none;
    border-radius: 3px;
    color: white;

    ${props => (props.type === 'arrows' 
    ? `background: steelblue;
      border: 1px solid black;
      margin: 0 10px;
      padding: 10px 10px;
      width: 60px;
      height: 60px;
      &:hover {
        background-color: red;
      }
      ` 
    : null)}
`;
  const H1 = styled.h1`
    width: 80%;
    @media (max-width: 800px){
        font-size: 1.5rem;
    }
    @media (max-width: 500px){
        font-size: 1rem;
    }
  `;

    return (
        <StyledButton>{props.buttonText}</StyledButton>
    );
  }
  
  export default Button;