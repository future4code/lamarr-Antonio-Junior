import React from "react";  
import styled from "styled-components";
import axios from "axios";  
import { useState } from "react";
import  useRequestData  from "../hooks/useRequestData";
import { useNavigate } from "react-router-dom";     
import { BASE_URL } from "../constants";  

import { goToBack } from "../Coordinator/Coordinator";

const Div = styled.div`
display: flex;
flex-direction: column;
width: 700px; 
margin-left: auto;
margin-right: auto;
`
const Select = styled.select`
width: 80%;
margin: 0 auto;
padding: 10px;
margin-bottom: 10px;
border-radius: 50px;
`

const H1 = styled.h1`
color: #A9A9A9 ;
font-size: 70px;
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

const ApllicationFormPage = () => {

    const navigate = useNavigate()

    return (
        <>
        <H1>Inscreva-se para uma viagem</H1>

        <Div>
        <Select />
        <Select />
        <Select />
        <Select />
        <Select />
        <Select />
        </Div>

        <Button onClick={() => goToBack(navigate)}>Voltar</Button>
        <Button>Enviar</Button>
        </>
    )
        
        
}


export default ApllicationFormPage