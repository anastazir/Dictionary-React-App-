/* eslint-disable no-unused-vars */
import './App.css';
import {useEffect, useState} from 'react';
import axios from 'axios';
import { Container } from '@material-ui/core';
function App() {
  const [word, setWord] = useState('')
  const [meaning, setMeaning] = useState([])

  const dictionaryAPI= async() =>{
    try {
      const data = await axios.get("https://api.dictionaryapi.dev/api/v2/entries/en/plane")
      setMeaning(data.data)
    } catch (error) {
      console.log(error);
    }
  }

  console.log(meaning);
  useEffect(() => {
    dictionaryAPI()
  }, [])

  return (
    <div className="App" style={{height: '100vh', background: '#282c34', color: 'white'}}>
      <Container maxWidth="md" style= {{display: "flex", flexDirection: "column", height: "100vh"}}>
          Dictionary
      </Container>
    </div>
  );
}

export default App;
