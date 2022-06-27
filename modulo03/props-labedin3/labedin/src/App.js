import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://img.freepik.com/free-vector/doodle-man-face-avatar-with-mustache-beard-haircut-hipster-guy-portrait-sticker-with-trendy-hair-hand-drawn-black-white-flat-vector-illustration-fashion-bearded-man-face_534430-719.jpg?w=2000" 
          nome="Cláudio Jr." 
          descricao="Oi, eu sou o Cláudio. Faço parte do grupo 8 do projeto Landing Page. Adoro ficar dando ideias para os meus colegas para eles acharem melhor e só pra ter o trabalho de mudar algo na página."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/271/271210.png" 
          texto="Ver mais"
        />
       <CardPequeno 
          imagem="https://png.pngtree.com/element_our/md/20180517/md_5afd688996524.jpg" 
          descricao="claudiohbjunior@gmail.com"
        />
        <CardPequeno 
          imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQU7UWlpj-iBknkKYqsZ6IX4V4DfH1bwPbv0JxUislkIU3qiAtl34ESJqcP7lrTWOK_0U&usqp=CAU" 
          descricao="Rua Creio no Processo "
        />

      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://img.freepik.com/free-vector/doodle-man-face-avatar-with-mustache-beard-haircut-hat-hipster-smile-guy-portrait-sticker-with-trendy-hair-hand-drawn-black-white-flat-vector-illustration-fashion-bearded-man-face_534430-722.jpg?w=2000" 
          nome="Na espera" 
          descricao="Aguardando minha primeira vaguinha" 
        />
        
        <CardGrande 
          imagem="https://logodownload.org/wp-content/uploads/2019/03/nasa-logo-0-768x768.png" 
          nome="NASA" 
          descricao="Experiêcia constatada em observar o céu e as estrelas à espera do ET." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />  
          <ImagemButton 
          imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxwWcLClf5T3Bns4RMZMVPvGNLVK_lUOTiC_Vjb5Ivs_3JuasU9FZQIAlgk0HcTEi9M4A&usqp=CAU" 
          texto="Linkedin" 
        />        
      </div>
    </div>
  );
}

export default App;
