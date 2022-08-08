import './App.css';
import Background from './Componentes/img/background_whats.png'
import Avatar from './Componentes/img/avatar1.png'
import React, {useState} from 'react';


function App() {

const [mensagemUsuario, setMensagemUsuario] = useState([{nome: '', mensagem: ''}])
const [inputNome, setInputNome] = useState("")
const [inputMensagem, setInputMensagem] = useState("")

  const handleInputNome = (e) => {
    setInputNome(e.target.value)
  }

  const handleInputMensagem = (e) => {
    setInputMensagem(e.target.value)
  }

  const addMensagem = (e) => {
    const adcionarMensagem = {nome: inputNome, mensagem: inputMensagem}
    const novaLista = [...mensagemUsuario, adcionarMensagem]
    setMensagemUsuario(novaLista)
  }
   
  
  const novaMensagem = mensagemUsuario.map ((usuario, index) => {
    return (
      <div key={index}>
        
        
        <b>{usuario.mensagem}</b><br></br>
    
        <></>
        {usuario.nome}
      </div> 
    )

  }) 

  return (
    <div className="App">
      
      <img className='bg-image' src={Background} />
      
    
      <input id="chatmessage" type="text" name="message" className="userinput" placeholder="Digite uma mensagem" value={inputNome}
          onChange={handleInputNome}></input>
          
      <input id="chatmessage2" type="text" name="message" className="userinput" placeholder="Usuário" value={inputMensagem}
          onChange={handleInputMensagem}></input>
      <button onClick={addMensagem} className='btn'>Enviar</button>    
      <main className="chat-container">
        <nav className="chat-navbar">
        <div className="contactinfo-container">
					<img className="user-photo" src={Avatar} />
					<p className="user-name">Cláudio Jr - Labenu</p>
          <div className='msg'>{novaMensagem}</div>
				</div>
        </nav>
      </main>
    </div>
    
  );
}

export default App;
