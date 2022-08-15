export const goToHomePage = (navigate) => {
    navigate("/")
}

export const goTripList = (navigate) => {
    navigate("/trips/list")
}

export const goToApllicationFormPage = (navigate) => {
    navigate("/trips/application")
}

export const goToLoginPage = (navigate) => {
    navigate("/login")
}

export const goToTripDetailsPage = (navigate) => {
    navigate("/admin/trips/list")
}

export const goToCreateTripPage = (navigate) => {
    navigate("/admin/trips/create")
}

export const goToAdminHomePage = (navigate) => {
    navigate("/admin/trips/:id")
}

export const goToBack = (navigate) => {
    navigate(-1)
}





