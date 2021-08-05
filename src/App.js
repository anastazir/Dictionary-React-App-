/* eslint-disable no-unused-vars */
import './App.css';
import {useEffect} from 'react';
import axios from 'axios';
function App() {
  
  const dictionaryAPI= async() =>{
    try {
      const data = await axios.get("https://api.dictionaryapi.dev/api/v2/entries/en/plane")
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    dictionaryAPI()
  }, [])
  return (

    <div className="App">
      asdfasdfasd
    </div>
  );
}

export default App;
