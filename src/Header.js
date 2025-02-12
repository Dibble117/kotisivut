// Header.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import './App.css';

function Header() {
  const location = useLocation();
  const showHome = location.pathname !== '/';

  return (
    <header className="App-header">
      <nav>
        <ul>
          {showHome && <li><a href="/">Koti</a></li>}
          <li><a href="/kaivuutyot">Kaivuutyöt</a></li>
          <li><a href="/kivityot">Kivityöt</a></li>
          <li><a href="/rakennustyot">Rakennustyöt</a></li>
          <li><a href="/sahkotyot">Sähkötyöt</a></li>
        </ul>
      </nav>
      {/* text with Jbygg logo, big, white and bold */}
      <h1 className="App-title">Jbygg</h1>

      {/*
      <img 
        src="/jbygg_transparent.png" 
        alt="Jbygg Logo" 
        style={{ maxWidth: '140px', marginRight: '10px' }} 
      />
      */}
    </header>
  );
}

export default Header;
