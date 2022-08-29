import React, { useEffect, useState } from "react";  
import { useProtectePage } from "../hooks/useProtectePage";

import { BASE_URL } from "../constants";
import { useNavigate } from "react-router-dom";
import useRequestData from "../hooks/useRequestData";
import { goToTripDetailsPage } from "../Coordinator/Coordinator";
import axios from "axios";

const AdminHomePage = () => {
    const [data] = useRequestData(`${BASE_URL}trips`)
    const navigate = useNavigate()

    const reload = () => {
        window.location.reload()
    }

    const logOut = () => {
        localStorage.removeItem("token")
        navigate("/login")
    }

    const deleteTrip = (id) => {
        const token = localStorage.getItem("token")
        axios
        .delete(`${BASE_URL}trips/${id}`, { headers: {auth: token}})
        .then((res) => {
            alert("ok")
            reload()
        })
    }

    const tripsList = 
    data && data.map((item) => (
        <div>
            <div>
                <p onClick={() => goToTripDetailsPage(navigate, item.id)}>{item.name}</p>
                <button onClick={() => deleteTrip(item.id)}></button>
            </div>
        </div>

    ))

    return (
        <div>
            {tripsList}
        </div>
    )

    



}
export default AdminHomePage