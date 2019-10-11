import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Button = (props) => {
  
    const StyledButton = styled.button`
    padding: 10px 10px;
    margin: 5px;
    border: none;
    border-radius: 3px;
    background-color: grey;
    color: black;
    &:hover {
      background-color: red;
    }

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

    return (
        <>
        <StyledButton onClick={() => {
            props.setLoadNewPage(props.prevPage);
        }}>Previous</StyledButton>
        <StyledButton onClick={() => {
            props.setLoadNewPage(props.nextPage);
        }}>Next</StyledButton>
        </>
    );
  }
  
  export default Button;