import React from "react";
import { Link } from "react-router-dom";
import './positionstyle.css'; 

const positions = [
  { name: "Goalkeeper", shortName: "GK", image: "/positions/Gk.png" },
  { name: "Defender", shortName: "DF", image: "/positions/Defender.png" },
  { name: "Midfielder", shortName: "MF", image: "/positions/Mid.png" },
  { name: "Forward", shortName: "FW", image: "/positions/Attack.png" }
];

const Position = () => {
  return (
    <div className="position-container">
      <h1>Select Player Position</h1>
      <div className="position-grid">
        {positions.map((position) => (
          <Link to={`/position/${position.shortName}`} key={position.shortName} className="position-box">
            <img src={position.image} alt={`${position.name}`} />
            <span>{position.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Position;
