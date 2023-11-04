import { useState } from 'react'
import './App.css'
import Crazy from './assets/RandomText'
import Jokes from './assets/DadJokes'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='App'>    
      <h1>Hello World</h1> 
     
    </div>
    <p>my name</p>

    <Crazy/>
    <Crazy/>

    <Jokes/>
    </>
  )
}

export default App
