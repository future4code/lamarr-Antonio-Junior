import { useState } from 'react';
import './App.css';
import { Etapa1 } from './Componentes/Etapa1'
import { Etapa2 } from './Componentes/Etapa2'
import { Etapa3 } from './Componentes/Etapa3'
import { Final } from './Componentes/Final';




function App() {
const [etapa, setEtapa] = useState(0)
const incremento = () => {
  setEtapa(etapa + 1)
}

function RenderizaEtapa () {
  switch (etapa) {
    case 1: 
      return <Etapa1 />
    case 2:
      return <Etapa2 />
    case 3:
      return <Etapa3 />
    case 4:
      return <Final />
  }
}


  return (
    <div className="App">
      <RenderizaEtapa />
      <button onClick={incremento}>Próxima etapa</button>
    </div>
  );
}

export default App;
