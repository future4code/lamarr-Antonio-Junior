import React from 'react';
import Post from './components/Post/Post';
import './style.css'


function App() {
  const arrayDeInformacoes =[ {nomeUsuario:"paulinha", fotoUsuario:"https://picsum.photos/50/50", fotoPost:'https://picsum.photos/200/150'},
                              {nomeUsuario:"samynha", fotoUsuario:"https://picsum.photos/50/49", fotoPost:'https://picsum.photos/200/151'},
                              {nomeUsuario:"julinha", fotoUsuario:"https://picsum.photos/50/58", fotoPost:'https://picsum.photos/200/152'}

]

const arrayDeLista = arrayDeInformacoes.map((elemento, index) => {
  return <Post
  nomeUsuario={elemento.nomeUsuario}
  fotoUsuario={elemento.fotoUsuario}
  fotoPost={elemento.fotoPost}

  key={index}
  />
  

})
return(
  <div className='MainContainer'>
    {arrayDeLista}

    {console.log(arrayDeInformacoes)}
  </div>
  
  
  
)

}


export default App;
