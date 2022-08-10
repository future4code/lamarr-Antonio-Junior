import React from "react";  
import { Link } from 'react-router-dom'
import styled from "styled-components";

const Div = styled.div`
display: flex;
flex-direction: column;
align-content: center;
`
const P = styled.p`
font-size: 40px;
color: black;
`


const HomePage = () => {
    return (
        <Div>
            <Link to="/">Home</Link>
            <Link to="/trips/list">Usuário ver a lista de todas as viagens</Link>
            <Link to="/trips/application">Para qualquer usuário poder se inscrever</Link>
            <Link to="/login">Para o admin poder fazer login</Link>
            <Link to="/admin/trips/list"> Para o admin poder ver e deletar as viagens existente</Link>
            <Link to="/admin/trips/create">Para o admin poder criar novas viagens</Link>
            <Link to="/admin/trips/:id">Ver detalhes e os candidatos de uma </Link><br></br>

            <Link to="/Wireframe"><P>WIREFRAME</P></Link>
        </Div>
        )
       
}

export default HomePage