import React from "react";  
import axios from "axios";  
import { useState } from "react";
import  useRequestData  from "../hooks/useRequestData";
import { useNavigate } from "react-router-dom";     
import { BASE_URL } from "../constants";    

const ApllicationFormPage = () => {
    
        const navigate = useNavigate()

        const [dataTrips, isLoading, error] = useRequestData(`${BASE_URL}trips`)

        const [name, setName] = useState("")
        const [age, setAge] = useState("")
        const [applicationText, setApplicationText] = useState("")
        const [profession, setProfession] = useState("")
        const [country, setCountry] = useState("")
        const [inputId, setInputId] = useState("")
        // const [countries] = useState(CountriesList)

        const ApllyToTrip = (tripId) => {
            
            const body = {
                name, 
                age,
                applicationText,
                profession,
                country
            }

            axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/junior/trips/${tripId}apply`, body, {
                headers: {
                "Content-Type": "application/json",
                }
            })
            .then((res) => {
                console.log("Isso é", res.data)
            })
            .catch((error) => {
                console.log(error.res.data)
            })
        }

        const onClickApply = (id) => {
            setName("")
            setAge("")
            setApplicationText("")
            setProfession("")
            setCountry("")
            ApllyToTrip(id)
        }

        const tripsList = dataTrips && dataTrips.trips.map((trips) => {
            return (
                <h1>A</h1>
            )
        })

        
    

   
}
export default ApllicationFormPage