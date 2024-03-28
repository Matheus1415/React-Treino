import React from 'react';
import './App.css';
import { Titulo } from './Componente/Titulo';
import { create } from 'domain';
import { createContext } from 'vm';
import MeuContexto, { Teste } from "./Contexto/TituloContexto/index"
import { Paragrafo } from './Componente/paragrafo';

function App() {
  const titulo: Teste = {
    titulo:"Meu titulo com Contexto",
    paragrafo:[
      "Meu paragrafo com o contexto",
      "Meu paragrafo com o contexto 2",
      "Meu paragrafo com o contexto 3",
      "Meu paragrafo com o contexto 4"
    ]
  }

  return(
    <div className="App">
      <MeuContexto.Provider value={titulo}>
        <Titulo/>
        <Paragrafo/>
      </MeuContexto.Provider>
    </div>
  );
}

export default App;
