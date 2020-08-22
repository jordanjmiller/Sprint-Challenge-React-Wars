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
  const [loadNewPage, setLoadNewPage] = useState('https://swapi.co/api/people/');
  const [person1, setPerson1] = useState({});
  const [person2, setPerson2] = useState({});
  const [person3, setPerson3] = useState({});
  const [person4, setPerson4] = useState({});
  const [person5, setPerson5] = useState({});
  const [person6, setPerson6] = useState({});
  const [person7, setPerson7] = useState({});
  const [person8, setPerson8] = useState({});
  const [person9, setPerson9] = useState({});
  const [person10, setPerson10] = useState({});

  const [p1HW, setP1HW] = useState('');
  const [p2HW, setP2HW] = useState('');
  const [p3HW, setP3HW] = useState('');
  const [p4HW, setP4HW] = useState('');
  const [p5HW, setP5HW] = useState('');
  const [p6HW, setP6HW] = useState('');
  const [p7HW, setP7HW] = useState('');
  const [p8HW, setP8HW] = useState('');
  const [p9HW, setP9HW] = useState('');
  const [p10HW, setP10HW] = useState('');
  

  useEffect(() => {
    axios.get(loadNewPage)
    .then(response => {
    // console.log(response.data);
    
    setPrevPage(response.data.previous);
    setNextPage(response.data.next);
    if (response.data.results.length > 7){
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

      axios.get(response.data.results[0].homeworld)
      .then(response => {
      setP1HW(response.data.name);
      })
      .catch(error => {console.log('Error! : ' + error)});
      axios.get(response.data.results[1].homeworld)
      .then(response => {
      setP2HW(response.data.name);
      })
      .catch(error => {console.log('Error! : ' + error)});
      axios.get(response.data.results[2].homeworld)
      .then(response => {
      setP3HW(response.data.name);
      })
      .catch(error => {console.log('Error! : ' + error)});
      axios.get(response.data.results[3].homeworld)
      .then(response => {
      setP4HW(response.data.name);
      })
      .catch(error => {console.log('Error! : ' + error)});
      axios.get(response.data.results[4].homeworld)
      .then(response => {
      setP5HW(response.data.name);
      })
      .catch(error => {console.log('Error! : ' + error)});
      axios.get(response.data.results[5].homeworld)
      .then(response => {
      setP6HW(response.data.name);
      })
      .catch(error => {console.log('Error! : ' + error)});
      axios.get(response.data.results[6].homeworld)
      .then(response => {
      setP7HW(response.data.name);
      })
      .catch(error => {console.log('Error! : ' + error)});
      axios.get(response.data.results[7].homeworld)
      .then(response => {
      setP8HW(response.data.name);
      })
      .catch(error => {console.log('Error! : ' + error)});
      axios.get(response.data.results[8].homeworld)
      .then(response => {
      setP9HW(response.data.name);
      })
      .catch(error => {console.log('Error! : ' + error)});
      axios.get(response.data.results[9].homeworld)
      .then(response => {
      setP10HW(response.data.name);
      })
      .catch(error => {console.log('Error! : ' + error)});
    }
    else {
      setPerson1(response.data.results[0])
      setPerson2(response.data.results[1])
      setPerson3(response.data.results[2])
      setPerson4(response.data.results[3])
      setPerson5(response.data.results[4])
      setPerson6(response.data.results[5])
      setPerson7(response.data.results[6])
      setPerson8({})
      setPerson9({})
      setPerson10({})
      setP8HW('');
      setP9HW('');
      setP10HW('');
      
      axios.get(response.data.results[0].homeworld)
      .then(response => {
      setP1HW(response.data.name);
      })
      .catch(error => {console.log('Error! : ' + error)});
      axios.get(response.data.results[1].homeworld)
      .then(response => {
      setP2HW(response.data.name);
      })
      .catch(error => {console.log('Error! : ' + error)});
      axios.get(response.data.results[2].homeworld)
      .then(response => {
      setP3HW(response.data.name);
      })
      .catch(error => {console.log('Error! : ' + error)});
      axios.get(response.data.results[3].homeworld)
      .then(response => {
      setP4HW(response.data.name);
      })
      .catch(error => {console.log('Error! : ' + error)});
      axios.get(response.data.results[4].homeworld)
      .then(response => {
      setP5HW(response.data.name);
      })
      .catch(error => {console.log('Error! : ' + error)});
      axios.get(response.data.results[5].homeworld)
      .then(response => {
      setP6HW(response.data.name);
      })
      .catch(error => {console.log('Error! : ' + error)});
      axios.get(response.data.results[6].homeworld)
      .then(response => {
      setP7HW(response.data.name);
      })
    }
    })
    .catch(error => {console.log('Error! : ' + error)});
    
  }, [loadNewPage]);

  // 

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Button loadNewPage={loadNewPage} setLoadNewPage={setLoadNewPage} prevPage={prevPage} nextPage={nextPage}/>
      <PeopleCard p1={person1} p2={person2} p3={person3} p4={person4} p5={person5} p6={person6} p7={person7} p8={person8} p9={person9} p10={person10} 
      p1HW={p1HW} p2HW={p2HW} p3HW={p3HW} p4HW={p4HW} p5HW={p5HW} p6HW={p6HW} p7HW={p7HW} p8HW={p8HW} p9HW={p9HW} p10HW={p10HW}/>
    </div>
  );
}

export default App;
