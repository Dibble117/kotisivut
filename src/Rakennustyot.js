// Rakennustyot.js
import React from 'react';
import Karuselli from './Karuselli';

function Rakennustyot() {
  return (
    <div className="page-wrapper">
      <div className="page-content">
        <h1>Rakennustyöt</h1>
        <p></p>
          <h4>- Uudisrakentaminen</h4>
          <h4>- Kattotyöt</h4>
          <h4>- Kaikki saneeraustyöt</h4>
          <h4>- Kph vesieristykset</h4>
          <h4>- Saunaremontit</h4>
          <h4>- Terassit / Pergolat</h4>
      </div>
      <div className="carousel-container">
        <Karuselli folder="rakennustyot" imageCount={28} />
      </div>
    </div>
  );
}

export default Rakennustyot;
