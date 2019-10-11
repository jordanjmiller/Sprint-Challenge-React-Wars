import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const PeopleCard = (props) => {
    console.log("Peoples: ");
    console.log(props);

    const PeopleCardMainDiv = styled.div`
    background-color: lightgrey;
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
  `;
    const PeopleCardDiv = styled.div`
    background-color: grey;
    width: 30%;
    margin: 10px auto;
  `;

    return (
        <>
        <PeopleCardMainDiv>
            <PeopleCardDiv>
            <p>{props.p1.name}</p>
            </PeopleCardDiv>
            <PeopleCardDiv>
            <p>{props.p2.name}</p>
            </PeopleCardDiv>
            <PeopleCardDiv>
            <p>{props.p3.name}</p>
            </PeopleCardDiv>
            <PeopleCardDiv>
            <p>{props.p4.name}</p>
            </PeopleCardDiv>
            <PeopleCardDiv>
            <p>{props.p5.name}</p>
            </PeopleCardDiv>
            <PeopleCardDiv>
            <p>{props.p6.name}</p>
            </PeopleCardDiv>
            <PeopleCardDiv>
            <p>{props.p7.name}</p>
            </PeopleCardDiv>
            <PeopleCardDiv>
            <p>{props.p8.name}</p>
            </PeopleCardDiv>
            <PeopleCardDiv>
            <p>{props.p9.name}</p>
            </PeopleCardDiv>
            <PeopleCardDiv>
            <p>{props.p10.name}</p>
            </PeopleCardDiv>
        </PeopleCardMainDiv>
        </>
    );
  }
  
  export default PeopleCard;