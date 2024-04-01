import React from 'react';
import './App.css';
import { Titulo } from './Componente/Titulo';
import { Paragrafo } from './Componente/paragrafo';
import { ContainerProvider } from './Contexto/TituloContexto'; 

function App() {

  return(
    <div className="App">
      <ContainerProvider>
        <Titulo/>
        <Paragrafo/>
      </ContainerProvider>
    </div>
  );
}

export default App;
