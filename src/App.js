/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import './App.css';
import {useEffect, useState} from 'react';
import axios from 'axios';
import { Container, Switch, withStyles } from '@material-ui/core';
import Header from './components/Header/Header';
import Definitions from './components/Definitions/Definitions.js';
import { grey } from '@material-ui/core/colors';
function App() {
  const [word, setWord] = useState('')
  const [meanings, setMeanings] = useState([])
  const [category, setCategory] = useState("en")
  const [lightTheme, setLightTheme] = useState(false)

  const GreySwitch = withStyles({
    switchBase: {
      color: grey[300],
      '&$checked': {
        color: grey[500],
      },
      '&$checked + $track': {
        backgroundColor: grey[500],
      },
    },
    checked: {},
    track: {},
  })(Switch);

  const dictionaryAPI= async() =>{
    try {
      const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`)
      setMeanings(data.data)
    } catch (error) {
      console.log(error);
    }
  }

  // console.log(meanings);
  useEffect(() => {
    dictionaryAPI()
  }, [word, category])

  return (
    <div 
    className="App" 
    style={{height: '100vh', 
    background:lightTheme ? "#fff" :'#282c34', 
    color:lightTheme ? 'black' : "white",
    transition: "all 0.5s linear",}}>    
      <Container maxWidth="md" style= {{display: "flex", flexDirection: "column", height: "100vh", justifyContent: "space-evenly"}}>
          <div style={{position: "absolute", top: 10, right: 50}}>
              <GreySwitch checked={lightTheme} onChange={()=> setLightTheme((!lightTheme))}/>
          </div>
          <Header category={category} setCategory={setCategory} word={word} setWord={setWord}/>
          {meanings && <Definitions word={word} meanings={meanings} category={category}/>}
      </Container>
    </div>
  );
}

export default App;
