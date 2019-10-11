import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import PeopleCard from './components/PeopleCard/PeopleCard.js';
import Button from './components/Button/Button.js';
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [prevPage, setPrevPage] = useState('');
  const [nextPage, setNextPage] = useState('');
  const [loadNewPage, setLoadNewPage] = useState('');
  const [person1, setPerson1] = useState({});
  const [person2, setPerson2] = useState([]);
  const [person3, setPerson3] = useState([]);
  const [person4, setPerson4] = useState([]);
  const [person5, setPerson5] = useState([]);
  const [person6, setPerson6] = useState([]);
  const [person7, setPerson7] = useState([]);
  const [person8, setPerson8] = useState([]);
  const [person9, setPerson9] = useState([]);
  const [person10, setPerson10] = useState([]);



  useEffect(() => {
    axios.get(`https://swapi.co/api/people/${loadNewPage}`)
    .then(response => {
    // console.log(response.data);
    
    setPrevPage(response.data.previous);
    setNextPage(response.data.next);
    setPerson1(response.data.results[0])
    setPerson2(response.data.results[1])
    setPerson3(response.data.results[2])
    setPerson4(response.data.results[3])
    setPerson5(response.data.results[4])
    setPerson6(response.data.results[5])
    setPerson7(response.data.results[6])
    setPerson8(response.data.results[7])
    setPerson9(response.data.results[8])
    setPerson10(response.data.results[9])
    })
    .catch(error => {console.log('Error! : ' + error)})
  }, []);



  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <PeopleCard p1={person1} p2={person2} p3={person3} p4={person4} p5={person5} p6={person6} p7={person7} p8={person8} p9={person9} p10={person10} />
    </div>
  );
}

export default App;
