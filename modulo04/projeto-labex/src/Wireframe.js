import React from "react";  
import HomePage from "./img/HomePage.jpg"
import LoginPage from "./img/LoginPage.jpg"
import ListTripsPage from "./img/ListTripsPage.jpg";
import ApllicationFormPage from "./img/ApplicationFormPage.jpg";
import CreateTripPage from "./img/CreateTripPage.jpg";
import TripDetailsPage from "./img/TripsDetailsPage.jpg";
import AdminHomePage from "./img/AdminHomePage.jpg";

const Wireframe = () => {
    return (
        <div>
            <img src={HomePage} />
            <img src={LoginPage} />
            <img src={ListTripsPage} />
            <img src={ApllicationFormPage} />
            <img src={CreateTripPage} />
            <img src={TripDetailsPage} />
            <img src={AdminHomePage} />
        </div>
    )
}

export default Wireframe