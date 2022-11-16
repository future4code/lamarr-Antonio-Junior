import './App.css';
import { BASE_URL } from './constants';
import useRequestData from './hooks/useRequestData';


import HomePage from './pages/HomePage';
import ListTripsPage from './pages/ListTripsPage'
import ApllicationFormPage from './pages/ApplicationFormPage';
import TripDetailsPage from './pages/TripeDetailsPage';
import CreateTripPage from './pages/CreateTripPage';
import LoginPage from './pages/LoginPage';
import AdminHomePage from './pages/AdminHomePage';
import Wireframe from './Wireframe';


import {
BrowserRouter,
Routes,
Route,
Navigate

} from 'react-router-dom'



function App() {


  return (
    <div className="App">

  

      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/trips/list' element={<ListTripsPage />} />
        <Route path='/trips/application' element={<ApllicationFormPage />} /> 
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/admin/trips/list' element={<AdminHomePage />} />
        <Route path='/admin/trips/create' element={<CreateTripPage/>} />
        <Route path='/admin/trips/:id' element={<TripDetailsPage />} />
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
