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
             <h1>LABX</h1>
             <div>
               <button> <Link to="/Wireframe">Área adiministrativa</Link></button>
               <button> <Link to="/trips/list">Lista de viagens</Link></button>
             </div>


            {/* <Link to="/Wireframe"><P>WIREFRAME</P></Link> */}
        </Div>
        )
       
}

export default HomePage