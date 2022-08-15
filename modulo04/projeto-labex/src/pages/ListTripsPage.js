import React from "react";  
import { BASE_URL } from '../constants';
import useRequestData from '../hooks/useRequestData';

import { useNavigate } from "react-router-dom"

import { goToBack, goToApllicationFormPage } from "../Coordinator/Coordinator";

import styled from "styled-components";

const Card = styled.ul`
list-style: none;
display: flex;
flex-direction: column;
margin: 15px;
width: 600px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
padding: 10px;

 

li {
  display: flex;
  flex-direction: column;
  margin: 10px
  float: right;  
}

p {
  display: flex;
  margin: 5px;
  font-weight: bold;
}

span {
  color: #ADD8E6;
  font-weight: bold;
}
`

const H1 = styled.h1`
color: #A9A9A9 ;
font-size: 70px;
`

const Button = styled.button`
box-shadow: 0px 3px 15px 2px #a20dbd;
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
padding:12px 46px;
text-decoration:none;
text-shadow:1px 1px 15px #2f6627;

&:hover {
  background:linear-gradient(to bottom, #a20dbd 5%, #c123de 100%);
	background-color:#5cbf2a;
}
`

const Div = styled.div`
display: flex;
justify-content: center;
`

const ListTripsPage = () => {

  const navigate = useNavigate()

    const [dataTrips, isLoading, error] = useRequestData(`${BASE_URL}trips/`)

    const tripsList = dataTrips && dataTrips.trips.map((trip)=>{
      
      return(
        <Div>
        <Card>
          <li>
            <p><span>NOME:</span>{trip.name}</p>
            <p><span>DESCRIÇÃO: </span>{trip.description}</p>
            <p><span>PLANETA: </span>{trip.planet}</p>
            <p><span>DURAÇÃO: </span>{trip.durationInDays}</p>
            <p><span>DATA: </span>{trip.date}</p>
          </li>
          </Card>
          </Div>
        )
      })
      return (
        <div>     
          <div>
            <Button onClick={() => goToBack(navigate)}>Voltar</Button>
            <Button onClick={() => goToApllicationFormPage(navigate)}>Inscrever-se</Button>
          </div>
          <H1>Lista de Viagens</H1>
          {isLoading && "...Carregando"}
          {!isLoading && dataTrips && tripsList}
          {!isLoading && !dataTrips && error}         
        </div>
      ) 
}

export default ListTripsPage