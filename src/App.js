import React from 'react';
import './App.css';
import styled from 'styled-components';

const Site = styled.div`
width: 400px;
background-color: green;
`;
const Title = styled.h1`
color: #ff0000;
font-size: 18px;
`;

function App() {
 return (
  <Site>
    <Title>Titulo legal</Title>
  </Site>
  )
}

/* ** Props
function BemVindo(props) {
  return <h1>Ola, {props.nome}</h1>;
}

function App() {
 return <>
 <BemVindo nome="Luccas"/>
 </>;
}
*/


/*   *** O JSX só permite retornar um elemento, então sempre temos que colocar uma div ao redor de tudo
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
*/

//  *** Formas de criar componentes 
/*
class App extends React.Component {
  render() {
   return <h1>Teste</h1>;
  }
}

-- função anonima
let App = () => {
   return <h1>Teste</h1>;
}

let App = () => <h1>Teste</h1>;
*/


export default App;