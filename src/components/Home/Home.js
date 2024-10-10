import React from 'react';
import './home.css';

const Home = () => {
  return (
    <div className="home-container">
      <header className="hero-section">
        <h1>Welcome to Fantasy PL!</h1>
        <p>Manage your fantasy team and view detailed player stats!</p>
        <a href="/team" className="cta-button">Explore Teams</a>
      </header>

      <section className="feature-section">
        <div className="feature-box">
          <h2>Search Players</h2>
          <p>Search for players by team, nationality, and position.</p>
        </div>
        <div className="feature-box">
          <h2>Track Stats</h2>
          <p>View stats for each player in your fantasy team.</p>
        </div>
        <div className="feature-box">
          <h2>Join Now</h2>
          <p>Compete with your Friends!</p>
        </div>
      </section>
    </div>
  );
};

export default Home;