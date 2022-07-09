import './App.css';
import Background from './Componentes/img/background_whats.png'
import Avatar from './Componentes/img/avatar1.png'


function App() {
  return (
    <div className="App">
      
      <img className='bg-image' src={Background} />
      <input id="chatmessage" type="text" name="message" className="userinput" placeholder="Digite uma mensagem"></input>
      <input id="chatmessage2" type="text" name="message" className="userinput" placeholder="Usuário"></input>
      <button className='btn'>Enviar</button>
      <main className="chat-container">
        <nav class="chat-navbar">
        <div class="contactinfo-container">
					<img className="user-photo" src={Avatar} />
					<p className="user-name">Cláudio Jr - Labenu</p>
				</div>
        </nav>
      </main>
    </div>
    
  );
}

export default App;
