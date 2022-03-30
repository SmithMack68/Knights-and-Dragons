import React from 'react'
import Navbar from './components/navigation/Navbar';
import Home from './components/static/Home';
import DragonPage from "./components/dragons/DragonPage"
import Login from './components/sessions/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import KnightsPage from './components/knights/KnightsPage';
//import { makeStyles } from '@material-ui/core/styles'
//import { Link } from "react-router-dom"
//import { baseUrl } from './Globals'
//import DragonKnocker from './images/DragonKnocker.png'

// const useStyles = makeStyles({
//   App: {
//     backgroundImage: './images/DragonKnocker.png'
//   }
// })


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/dragonPage" element={<DragonPage />} />
        <Route path="/knightsPage" element={<KnightsPage/>} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
