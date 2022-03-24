import React, { useState, useEffect } from 'react'
import Navbar from './components/navigation/Navbar';
import Home from './components/static/Home';
import PetCards from "./components/pets/PetCards"
import PetList from "./components/pets/PetList"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import { baseUrl} from './Globals'


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/petCards" element={<PetCards />} />
        <Route path="/petList" element={<PetList/>} />
      </Routes>
    </Router>
  );
}

export default App;
