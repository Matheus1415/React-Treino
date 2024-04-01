import React, { createContext, ReactNode } from 'react';

// Definindo o tipo para o valor do contexto
interface ValorDoContexto {
  titulo: string | null;
  paragrafo: string[] | null;
}

// Criando o contexto
export const ContainerContext = createContext<ValorDoContexto>({
  titulo: null,
  paragrafo: null,
});

// Definindo o tipo para os componentes filhos
interface PropDoContainer {
  children: ReactNode;
}

// Criando o provedor de contexto
export const ContainerProvider = ({ children }: PropDoContainer) => {
  const meuContexto: ValorDoContexto = {
    titulo: 'Meu Título',
    paragrafo: ['Parágrafo 1', 'Parágrafo 2', 'Parágrafo 3'],
  };

  return (
    <ContainerContext.Provider value={meuContexto}>
      {children}
    </ContainerContext.Provider>
  );
};
