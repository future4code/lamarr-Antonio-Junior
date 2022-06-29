import React from 'react';
import Post from './components/Post/Post';
import './style.css'


function App() {
return(
  <div className='MainContainer'>
           <Post
            nomeUsuario={'paulinha'}
            fotoUsuario={'https://picsum.photos/50/50'}
            fotoPost={'https://picsum.photos/200/150'}
          />
                     <Post
            nomeUsuario={'samynha'}
            fotoUsuario={'https://picsum.photos/50/49'}
            fotoPost={'https://picsum.photos/200/151'}
          />
                     <Post
            nomeUsuario={'julinha'}
            fotoUsuario={'https://picsum.photos/50/58'}
            fotoPost={'https://picsum.photos/200/152'}
          />
  </div>
  
  
)

}


export default App;
