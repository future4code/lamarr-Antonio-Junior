import React from "react";  
import styled from "styled-components";
import axios from "axios";  

import { useForm } from "../hooks/useForm";
import { useState } from "react";
import  useRequestData  from "../hooks/useRequestData";
import { useNavigate } from "react-router-dom";     
import { BASE_URL } from "../constants";  

import { goToBack } from "../Coordinator/Coordinator";

const Div = styled.div`
display: flex;
flex-direction: column;
width: 400px; 
margin-left: auto;
margin-right: auto;
` 

const Input = styled.input`
width: 80%;
margin: 0 auto;
padding: 10px;
margin-bottom: 10px;
border-radius: 50px;
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

const LoginPage = () => {

    const [form, onChange, clear] = useForm({email: "", senha: ""})

    const navigate = useNavigate()

    const fazerLogin = (event) => {
        event.preventDefault()
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/junior/login", form)
        .then((res) => console.log(res.data))

    }

    
    return (
    <>
    
     <H1>LoginPage</H1>

     <form onSubmit={fazerLogin}>
     <Div>
        <label htmlFor="email">
        </label>
        <Input
            name="email"
            id="email"
            placeholder="E-mail"
            value={form.email}
            onChange={onChange}
            type="email"
        />
        <Input 
            name="password"
            id="senha"
            placeholder="Senha"
            value={form.password}
            onChange={onChange}
            pattern="^.{3,}$"
            type="password"
            title="Minimo de 3 caracteres"
        />
        
    
    <div>
    <Button onClick={() => goToBack(navigate)}>Voltar</Button>
    <Button type="submit">Entrar</Button>
    </div>
    </Div>
    </form>
    
    </>
)
    
}
export default LoginPage