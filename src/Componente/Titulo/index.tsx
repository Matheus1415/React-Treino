import React, { useContext } from 'react';
import { ContainerContext } from '../../Contexto/TituloContexto';

export const Titulo = () => {
  const {titulo}  = useContext(ContainerContext);
  return (
    <h1>{titulo}</h1>
  );
};
