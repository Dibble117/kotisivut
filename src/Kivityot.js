// Kivityot.js
import React from 'react';
import Karuselli from './Karuselli';

function Kivityot() {
  return (
    <div className="page-wrapper">
      <div className="page-content">
        <h1>Kivityöt</h1>
        <p>
          This is the Kivityöt page. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Fusce sed augue nec lorem accumsan dapibus. Suspendisse potenti.
        </p>
      </div>
      <div className="carousel-container">
        <Karuselli />
      </div>
    </div>
  );
}

export default Kivityot;
