// Kaivuutyot.js
import React from 'react';
import Karuselli from './Karuselli';

function Kaivuutyot() {
    return (
      <div className="page-wrapper">
        <div className="page-content">
          <h1>Kaivuutyöt</h1>
          <p>
            This is the Kaivuutyöt page. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Pellentesque imperdiet ligula sed orci ultrices,
            non mollis elit blandit.
          </p>
        </div>
        <div className="carousel-container">
          <Karuselli />
        </div>
      </div>
    );
  }

export default Kaivuutyot;
