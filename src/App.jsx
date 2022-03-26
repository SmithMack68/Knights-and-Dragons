import React from 'react'
import Navbar from './components/navigation/Navbar';
import Home from './components/static/Home';
import PetCards from "./components/pets/PetCards"
import PetList from "./components/pets/PetList"
import Login from './components/sessions/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import { baseUrl } from './Globals'
import DragonKnocker from './images/DragonKnocker.png'


const App = () => {
  return (
    <Router>
      <img  src={DragonKnocker} alt="Dragon Knocker" height={790} width={1400}/>
      {/*<Button color="inherit" style={{ fontSize: 20 }} component={ Link } to="/">Pets</Button>*/}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/petCards" element={<PetCards />} />
        <Route path="/petList" element={<PetList/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </Router>
  );
}

export default App;
