import React from 'react';
import MeuContexto from '../../Contexto/TituloContexto/index';

export const Titulo = () => {
  return (
    <MeuContexto.Consumer>
      {titulo => <h1>{titulo.titulo}</h1>}
    </MeuContexto.Consumer>
  );
};
