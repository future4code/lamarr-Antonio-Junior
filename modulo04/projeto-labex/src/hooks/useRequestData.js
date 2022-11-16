import axios from "axios";
import React, { useState, useEffect } from "react";

const useRequestData= (url) => {

    const [data, setData] = useState(undefined);
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")
    
    useEffect(()=>{
        setIsLoading(true)
        axios
        .get(url)
        .then(res => {
            setIsLoading(false)
            setData(res.data)  
        })
        .catch((error) => {
            setIsLoading(false)
            setError(error)
        })
        
    }, [url])

    return [data, isLoading, error]

}

export default useRequestData