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
    <div className='KKKK'>
    <img src='./Teto rindo.png' alt='HAHAHA'/>
    </div>
    <div className='Pearto'>
      <img src='./Pearto.png' alt='Coisa'/>

    </div>
    <div className='Teto'>
      <img src='./Teto da Sabedoria.png' alt='teto'/>
    </div>
    <div className='Olhando'>
      <img src='./Goku.png' alt='Goku'/>
    </div>
    <div className='Terra'>
        <img src='./Comer terra.png' alt='Comer'/>
    </div>
    </div>
    
  )
}

export default App
