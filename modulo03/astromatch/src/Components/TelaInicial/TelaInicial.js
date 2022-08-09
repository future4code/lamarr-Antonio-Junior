import React, { useEffect, useState } from "react";
import axios from "axios";  
import styled from "styled-components";
import { Link } from "react-router-dom";

import { IoMdContacts } from 'react-icons/io';
import { TiHeartFullOutline } from 'react-icons/ti';
import { TiDelete } from 'react-icons/ti';

const Img = styled.img`
width:250px;
height: 200px;
border: thin silver solid;
`

const Div = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
background-color:#008b8b;
position: absolute;
width: 300px;
height: 360px;
left: 530px;
`
const DivCenter = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width:250px;
`

const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:junior/person"

const TelaInicial = () => {
const [usuarios, setUsuarios] = useState([])

const recebePerfil = () => {

    axios.get(url)
    .then((res) => {
        setUsuarios(res.data.profile)
    }, [])
}

useEffect(() =>{
    recebePerfil()
}, [])

const post = (id, choice) => {

    const urlPost = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:junior/choose-person"

    const body ={
        "id": id,
        "choice": choice
    }

    axios.post(urlPost, body)
    .then(() => {
        recebePerfil()
    })
}

    return (
        <Div>
        <DivCenter>
        <h1><span>Astro</span>match</h1>
        <Link to={"/matches"}><IoMdContacts className="contact" /></Link>
        </DivCenter>
       
        <section className="container">
            <Img src={usuarios.photo}  /> 
            <div className="baixoEsquerda">{usuarios.name}, {usuarios.age}</div>
            <div className="baixoDireita">{usuarios.bio}</div>
        </section>
            
            <div>
            <button onClick={() => post(usuarios.id, false)}><TiDelete className="btn"/></button>
            <button className="heart" onClick={() => post(usuarios.id, true)}><TiHeartFullOutline className="btn" /></button>
            </div>   
        </Div>
    )
} 

export default TelaInicial