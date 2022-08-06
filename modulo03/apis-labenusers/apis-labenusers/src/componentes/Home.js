import axios from 'axios'
import React, {useEffect, useState} from "react";

const Home = () => {

  const [nome, setNome] = useState([]);
  const [adicionarNome, setAdicionarNome] = useState("");
  const [adicionarEmail, setAdicionarEmail] = useState("");

  const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

  const recebeUsuarioNome = (event) => {
    setAdicionarNome(event.target.value)
    
  }

  const recebeUsuarioEmail = (event) => {
    setAdicionarEmail(event.target.value)
  }

  useEffect (()=>{
    getPlayList()
  }, [])

//   const deletaUsuario = (event) => {
//     event.preventDefault()
//     const deletarUser=nome.filter((item) => {
//         return (
//             item.name==nome
//         )
//     })
//     const idDelete=deletarUser[0].id

//     axios.delete(url+"/:"+idDelete, autho)
//     .then(()=>{
//         alert("Deletado")
//         getPlayList()
//     })
//     .catch((erro)=>{
//         alert("Vishh, deu ruim")
//     })
//     setAdicionarNome("")
//     setAdicionarEmail("")  
// }

const deletaUsuario = (id) => {
    axios.delete(url+"/"+id, autho) 
    .then(()=>{
        getPlayList()
    })
    .catch(()=>{
        console.log("Deu ruim")
    })
}  

  const componentsLista = nome.map((item, index) =>{
    return (
        <li key={index}>
            {item.name}<button onClick={()=>deletaUsuario(item.id)}>X</button>
        </li>
    )
  })

  
  

  const autho =  {
    headers: {
        Authorization: "claudio-holanda-lammar"
    }
}

  const body = {
    
        "name":adicionarNome,
        "email": adicionarEmail
    
  }

const getPlayList =()=>{
    axios.get(url, autho)
    .then((response)=>{
        setNome(response.data)
    })
}

const adicionarUsuario = (event) => {
    event.preventDefault()
    axios.post(url, body, autho)
    .then(() =>{
        getPlayList()
        alert("Usuário adcionado com sucesso")
    })
    .catch((erro)=>{
        alert("Não deu")
    })
    setAdicionarNome("")
    setAdicionarEmail("")   
}




return (
    <>
    <button>Troca de tela</button><br></br>
    {componentsLista}
    <input type="text" value={adicionarNome} placeholder='nome' onChange={recebeUsuarioNome}></input>
    <input type="email" value={adicionarEmail} placeholder='Email' onChange={recebeUsuarioEmail}></input>
    <button onClick={adicionarUsuario}>Criar usuário</button>
    </>
)
}
  



export default Home

