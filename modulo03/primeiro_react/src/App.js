// import logo from './logo.svg';
import Avatar from './img/avatar.png';
import './App.css';

function App() {
  function mensagem(){
    alert("O botão foi apertado")
  }
  return (
    <div className="App">
     <h1>Olá, eu sou o Júnior!</h1>
     <img src={Avatar} alt="Meu avatar" width="200px"></img><br></br>
     <button onClick={mensagem}>Clique aqui</button>
    </div>
  );
}

export default App;
