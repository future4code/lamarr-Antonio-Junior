import React from 'react';
import styled from 'styled-components';
import { Footer, Header } from "./style";
import Logo from './Componentes/img/logo-labenu.jpg'




const Container = styled.div`
background-color: orange;
display: flex;
height: 500px;
width: 200px;
float: right;
`

const Container1 = styled.div`
background-color: orange;
display: flex;
height: 500px;
width: 200px;
`

const Main = styled.div`
display: flex;
width: 200px;

h1 {
  position: absolute;
  top: 10px
}

input {
  position: absolute;
  top: 10px
}
div1 {
  position: absolute;
  top: 530px;
  left: 470px;
}

div2 {
  position: absolute;
  top: 530px;
  left: 650px;
}
div3 {
  position: absolute;
  top: 539px;
  left: 830px;
}

`

function App() {
  return (
    <div>
      <Header>    
        <img src={Logo} width="80px"/>
        <h1>LabZap</h1>
      </Header>

      <Container>
        <div>
        </div>
      </Container>

      <Container1>
        <div>
        </div>
      </Container1>
      
      <Footer>
        <p>Copyright  2022 Labenu All rights reserverd R Pais Leme, 215, conjunto 820 Pinheiros. Cep 05424-150 </p>
      </Footer>

      <Main>
      <div>
          <div1>
          <input placeholder='Remetente'></input>
          </div1>
          <div2>
          <input placeholder='Msg'></input>
          </div2>
          <div3>
          <button>Enviar</button>
          </div3>
        </div>
      </Main>
    </div>
  );
}

export default App;