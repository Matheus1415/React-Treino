import React from 'react';
import './App.css';
import { Titulo } from './Componente/Titulo';
import { Paragrafo } from './Componente/paragrafo';
import { ContainerProvider } from './Contexto/TituloContexto'; 
import Lista from './Componente/Lista';

function App() {

  return(
    <div className="App">
      <ContainerProvider>
        <Lista/>
      </ContainerProvider>
    </div>
  );
}

export default App;
