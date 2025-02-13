// Kaivuutyot.js
import React from 'react';
import Karuselli from './Karuselli';

function Kaivuutyot() {
  return (
    <div className="page-wrapper">
      <div className="page-content">
        <h1>Kaivuutyöt</h1>
        <p></p>
          <h4>- Pohjatyöt perustuksille</h4>
          <h4>- Salaojat</h4>
          <h4>- Vesijohtojen ja viemäreiden kaivuut</h4>
          <h4>- Kaapeliojien kaivuut</h4>
          <h4>- Pihojen maisemointikaivuut</h4>
          <h4>- Kantojen poistot / Istutustyöt</h4>
      </div>
      <div className="carousel-container">
        <Karuselli folder="kaivuutyot" imageCount={14} />
      </div>
    </div>
  );
}

export default Kaivuutyot;
