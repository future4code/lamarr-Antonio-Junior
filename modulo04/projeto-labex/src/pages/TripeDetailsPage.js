import axios from "axios";
import React, { useEffect, useState } from "react";  
import { useParams, useNavigate } from "react-router-dom";
import { BASE_URL } from "../constants";
import { useProtectePage } from "../hooks/useProtectePage";



const TripDetailsPage = () => {


    return (
        <div>
        <h1>Painel Administrativo</h1>
        
        <button>1</button>
        <button>2</button>
        <button>3</button>
        </div>
    )
}
export default TripDetailsPage