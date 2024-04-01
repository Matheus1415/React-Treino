import React, { useContext } from "react";
import { ContainerContext } from "../../Contexto/TituloContexto";

export const Paragrafo: React.FC = () => {
  const {paragrafo} = useContext(ContainerContext);
  return (
    <div>
      {paragrafo!.map(p => <p>{p}</p>)}
    </div>
  );
};
