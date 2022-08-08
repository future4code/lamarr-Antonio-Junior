import './App.css';
import TelaDeMatches from './Components/TelaDeMatches/TelaDeMatches';
import TelaInicial from './Components/TelaInicial/TelaInicial';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes
} from 'react-router-dom'
import Header from './Components/Header/Header';


function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
      <Route path="/matches" exact element={<TelaDeMatches />} />
      <Route path="/telaInicial" exact element={<TelaInicial />} />
      </Routes>    
    </div>
    </Router>
  );
}

export default App;
