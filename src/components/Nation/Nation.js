import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './nationstyle.css'; 

const nationsData = [
  { name: 'England', flag: '/nations/England.png' },
  { name: 'Brazil', flag: '/nations/Brazil.png' },
  { name: 'Germany', flag: '/nations/Germany.png' },
  { name: 'France', flag: '/nations/France.png' },
  { name: 'Argentina', flag: '/nations/Argentina.png' },
  { name: 'Spain', flag: '/nations/Spain.png' },
  { name: 'Portugal', flag: '/nations/Portugal.png' },
  { name: 'Belgium', flag: '/nations/Belgium.png' },
  { name: 'Italy', flag: '/nations/Italy.png' },
  { name: 'Netherlands', flag: '/nations/Netherlands.png' },
  { name: 'Uruguay', flag: '/nations/Uruguay.png' },
  { name: 'South-Korea', flag: '/nations/SouthKorea.png' },
];

const Nations = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredNations = nationsData.filter((nation) =>
    nation.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="nation-container">
      <h1>Premier League Nations</h1>
      <div className='search-container'>
      <input
        type="text"
        placeholder="Search for a nation..."
        className="search-input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      </div>

      <div className="nation-grid">
        {filteredNations.map((nation) => (
          <Link
            to={`/nation/${nation.name}`}
            key={nation.name}
            className="nation-box"
          >
            <img src={nation.flag} alt={`${nation.name} flag`} />
            <span>{nation.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Nations;
