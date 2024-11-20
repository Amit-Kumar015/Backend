import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get("/api/jokes")
    .then((res) => {
      setJokes(res.data)
    })
    .catch((err) => {
      console.log(err);
      
    })
  }, [])

  return (
    <>
      <h1>Jokes: {jokes.length}</h1>
      {
        jokes.map((joke) => (
          <div key={joke.id}>
            <h3>{joke.setup}</h3>
            <h3>{joke.punchline}</h3>
          </div>
        ))
      }
    </>
  )
}

export default App
