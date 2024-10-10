import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PlayerListfinal = ({ filterBy }) => {
  const { teamName, nation, position } = useParams();
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      let url = 'http://localhost:8080/api/player'; // Base API URL
      let filter = '';

      // Build the filter based on the filterBy prop
      if (filterBy === 'team') {
        filter = `?team=${teamName}`;
      } else if (filterBy === 'nation') {
        filter = `?nation=${nation}`;
      } else if (filterBy === 'position') {
        filter = `?position=${position}`;
      }

      try {
        const response = await axios.get(`${url}${filter}`);
        setPlayers(response.data); // Assuming the API returns a list of players
      } catch (error) {
        console.error('Error fetching players:', error);
      }
    };

    fetchPlayers();
  }, [filterBy, teamName, nation, position]);

  return (
    <div>
      <h1>Player List</h1>
      <table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Nation</th>
      <th>Team</th>
      <th>Position</th>
      <th>Age</th>
      <th>Matches</th> {}
      <th>Minutes Played</th>
      <th>Goals</th>
      <th>Assists</th>
      <th>Goals & Assists</th>
      <th>Yellow Cards</th>
      <th>Red Cards</th>
      <th>Expected Goals (xG)</th>
    </tr>
  </thead>
  <tbody>
    {players.map(player => (
      <tr key={player.name}>
        <td>{player.name}</td>
        <td>{player.nation}</td>
        <td>{player.team}</td>
        <td>{player.position}</td>
        <td>{player.age}</td>
        <td>{player.matches}</td>
        <td>{player.minutes}</td>
        <td>{player.goals}</td>
        <td>{player.assists}</td>
        <td>{player.goalsandassists}</td>
        <td>{player.yellow_cards}</td>
        <td>{player.red_cards}</td>
        <td>{player.xG}</td>
      </tr>
    ))}
  </tbody>
</table>

    </div>
  );
};

export default PlayerListfinal;
