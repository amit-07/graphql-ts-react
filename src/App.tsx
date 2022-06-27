import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import './App.css';
import Header from './Components/ReusableComponents/Header';
import Continents from './Components/Modules/Continents/Continents';
import Countries from './Components/Modules/Countries/Countries';
import CountryDetails from './Components/Modules/Details/CountryDetails';


function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/"><Header title="Discovery"/></Link>
        <Routes>
            <Route path="/" element={<Continents />} />
            <Route path="/countries" element={<Countries />} />
            <Route path="/details" element={<CountryDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
