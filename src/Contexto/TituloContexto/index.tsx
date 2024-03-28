import React from 'react';

export interface Teste {
    titulo:String,
    paragrafo: Array<string>
}

const MeuContexto = React.createContext<Teste>({titulo:"", paragrafo:[]});

export default MeuContexto;
