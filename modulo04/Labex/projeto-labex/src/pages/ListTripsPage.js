import React from "react";  
import { BASE_URL } from '../constants';
import useRequestData from '../hooks/useRequestData';

const ListTripsPage = () => {

    const listaViagens = useRequestData(`${BASE_URL}trips`)

    const user = listaViagens && listaViagens.trips.map((nome)=>{
      return<li>{nome.name}</li>
      })

    return <h1>{user}</h1>

    

    

    
    
    
    
}

export default ListTripsPage