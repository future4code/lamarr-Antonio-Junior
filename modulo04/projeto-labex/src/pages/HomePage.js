import React from "react";  
import styled from "styled-components";
import { useNavigate } from "react-router-dom"
import { GiSpaceShuttle } from 'react-icons/gi'

import { goTripList } from "../Coordinator/Coordinator";

const Div = styled.div`
display: flex;
flex-direction: column;
align-content: center;
`
const P = styled.p`
font-size: 40px;
color: black;
`
const Button = styled.button`
box-shadow: 0px 6px 30px 7px #a20dbd;
background:linear-gradient(to bottom, #c123de 5%, #a20dbd 100%);
background-color:#44c767;
border-radius:28px;
border:1px solid #18ab29;
display:inline-block;
cursor:pointer;
color:#ffffff;
font-family:Arial;
font-size:17px;
font-weight:bold;
padding:22px 26px;
text-decoration:none;
text-shadow:1px 1px 15px #2f6627;

&:hover {
  background:linear-gradient(to bottom, #a20dbd 5%, #c123de 100%);
	background-color:#5cbf2a;
}
`

const H1 = styled.h1`
color: #A9A9A9 ;
font-size: 70px;
`




const HomePage = () => {

  const navigate = useNavigate()
    return (
        <Div>
             <H1>LABEX <GiSpaceShuttle className="foguetinho" /></H1>
             <div>
               <Button><pre><h2>Área admiministrativa</h2></pre></Button>
               <Button onClick={() => goTripList(navigate)}><pre><h2>   Lista de viagens   </h2></pre></Button>
             </div>
             
        </Div>
        
        )
       
}

export default HomePage