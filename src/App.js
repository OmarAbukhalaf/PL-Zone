import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/navbar';
import Home from './components/Home/Home';
import Team from './components/Team/Team';
import Nation from './components/Nation/Nation';
import Position from './components/Position/Position';
import PlayerListfinal from './components/PlayerListing/PlayerListfinal'; // Single component to filter all players
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/nation" element={<Nation />} />
        <Route path="/position" element={<Position />} />
        
        <Route path="/team/:teamName" element={<PlayerListfinal filterBy="team" />} />
        <Route path="/nation/:nation" element={<PlayerListfinal filterBy="nation" />} />
        <Route path="/position/:position" element={<PlayerListfinal filterBy="position" />} />

        <Route path="*" element={<Home />} /> {}
      </Routes>
    </Router>
  );
}

export default App;
