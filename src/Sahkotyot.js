// Sahkotyot.js
import React from 'react';
import Karuselli from './Karuselli';

function Sahkotyot() {
  return (
    <div className="page-wrapper">
      <div className="page-content">
        <h1>Sähkötyöt</h1>
        <p>
          This is the Sähkötyöt page. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Fusce sed augue nec lorem accumsan dapibus. Suspendisse potenti.
        </p>
      </div>
      <div className="carousel-container">
        <Karuselli />
      </div>
    </div>
  );
}

export default Sahkotyot;
