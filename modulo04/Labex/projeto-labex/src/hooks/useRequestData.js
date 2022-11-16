import axios from "axios";
import React, { useState, useEffect } from "react";

const useRequestData= (url) => {

    const [listaDeViagens, setListaDeViagens] = useState(undefined)
    
    useEffect(()=>{
        axios
        .get(url)
        .then(res => {
            setListaDeViagens(res.data)
        })

        
        
    }, [])
    console.log(listaDeViagens)
    return listaDeViagens

    


}

export default useRequestData