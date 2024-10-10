import React, { useState, useEffect } from 'react';
import './teamstyle.css'; // Import the CSS file
import { Link } from 'react-router-dom';

// Sample data for team logos
const teams = [
  { name: 'Manchester-City', logo: '/teams/ManchesterCity.png' },
  { name: 'Arsenal', logo: '/teams/Arsenal.png' },
  { name: 'Chelsea', logo: '/teams/Chelsea.png' },
  { name: 'Liverpool', logo: '/teams/Liverpool.png' },
  { name: 'Brighton-and-Hove-Albion', logo: '/teams/Brighton.png' },
{ name: 'Aston-Villa', logo: '/teams/AstonVilla.png' },
  { name: 'Bournemouth', logo: '/teams/Bournemouth.png' },
  { name: 'Brentford', logo: '/teams/Brentford.png' },
  { name: 'Crystal-Palace', logo: '/teams/CrystalPalace.png' },
  { name: 'Everton', logo: '/teams/Everton.png' },
  { name: 'Fulham', logo: '/teams/Fulham.png' },
  { name: 'Ipswich', logo: '/teams/Ipswich.png' },
{ name: 'Leicester-City', logo: '/teams/LeicesterCity.png' },
{ name: 'Manchester-United', logo: '/teams/ManchesterUnited.png' },
{ name: 'Newcastle-United', logo: '/teams/NewcastleUnited.png' },
{ name: 'Nottingham-Forest', logo: '/teams/NottinghamForest.png' },
{ name: 'Southampton', logo: '/teams/Southampton.png' },
{ name: 'Tottenham-Hotspur', logo: '/teams/Tottenham.png' },
{ name: 'West-Ham-United', logo: '/teams/Westham.png' },
{ name: 'Wolverhampton-Wanderers', logo: '/teams/Wolves.png' }
];

const Team = () => {
  return (
    <div className="team-container">
      <h1>Premier League Teams</h1>
      <div className="team-grid">
        {teams.map((team) => (
          <Link to={`/team/${team.name}`} key={team.name} className="team-logo">
            <img src={team.logo} alt={`${team.name} logo`} />
            <span>{team.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Team;
