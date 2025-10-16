import { useState } from 'react'

import './App.css'
import SeuNome from './components/SeuNome'
import Saudacao from './components/Saudacao'

function App() {
  const [nome, setNome] = useState("")
  return (
    <div className='bloco'>
    <div className='App'>
      <h1> State Lift </h1>
      <SeuNome setNome={setNome} />
      <Saudacao nome={nome} />
      {nome &&(
        <p>O nome digitado foi: {nome}</p>
      )}
    </div>
    <div className='papeldeparede'>
    <img src='./Bikini Bottoms.png' alt='BBs'/>
    </div>
    <div className='Pearto'>
      <img src='./Pearto.png' alt='Coisa'/>

    </div>
    <div className='Teto'>
      <img src='./Teto plush.png' alt='teto'/>
    </div>
    <div className='Olhando'>
      <img src='./Goku.png' alt='Goku'/>
    </div>
    </div>
    
  )
}

export default App
