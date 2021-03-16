import React from 'react';

function retornarNome(usuario) {
  return usuario.nome+' '+usuario.sobreNome;
}

function App() {
  let usuario = {
    nome: "Luccas",
    sobreNome: "Mesquita"
  };

  return <h1>meu nome é {retornarNome(usuario)}</h1>;
}
export default App;

//Formas de criar componentes 
/*
class App extends React.Component {
  render() {
   return <h1>Teste</h1>;
  }
}
*/

/* função anonima
let App = () => {
   return <h1>Teste</h1>;
}
*/

/*
let App = () => <h1>Teste</h1>;
*/

// O JSX só permite retornar um elemento, então sempre temos que colocar uma div ao redor de tudo