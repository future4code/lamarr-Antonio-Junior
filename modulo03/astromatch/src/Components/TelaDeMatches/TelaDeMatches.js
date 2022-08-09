import React, { useEffect, useState } from "react";
import axios from "axios";  

import styled from "styled-components";
import { Link } from "react-router-dom";
import { FiHome } from 'react-icons/fi';

const Div = styled.div`
display: flex;
align-items: flex-start;
justify-content: center;
background-color:#008b8b;
position: absolute;
width: 300px;
// height: 360px;
left: 530px;
`
const Img = styled.img`
width:50px;
`
const Li = styled.li`
display: flex;
list-style: none;
font-size: 10px;
margin: 5px;
`

function TelaDeMatches () {
    
    const [matches, setMatches] = useState([])

    const mostrarMatches = () => {
        const urlGetMatches = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:junior/matches"

        axios.get(urlGetMatches)
        .then((res) => {
            setMatches(res.data.matches)
            console.log(res)
        })
    }

    useEffect(() => {
        mostrarMatches()
    }, [])

    const listaDeMatches = matches.map((person) => {
        return(         
            <Li>
            <Img src={person.photo} />
            <h2>{person.name}</h2>
            </Li>
        )
    })

    const limparLista = () => {
        const urlLImpar = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:junior/clear"
        axios.put (urlLImpar)
        .then(() => {
            setMatches([])
        })
    }
    return (
        <Div>   
            <div className="headerMatches">
            <Link to={"/telaInicial"}><FiHome className="contact2" /></Link>
            <button onClick={limparLista}>Limpar</button>
            </div>
            
            <div className="macthes">
            {listaDeMatches} 
            </div>     
        </Div>
    )
} 

export default TelaDeMatches