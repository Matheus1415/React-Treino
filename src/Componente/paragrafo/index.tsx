import React from "react";
import MeuContexto from "../../Contexto/TituloContexto";

export const Paragrafo: React.FC = () => {
  return (
    <MeuContexto.Consumer>
      {(contextValue) => (
        <div>
          {contextValue.paragrafo.map((paragrafo, index) => (
            <p key={index}>{paragrafo}</p>
          ))}
        </div>
      )}
    </MeuContexto.Consumer>
  );
};
