// Kivityot.js
import React from 'react';
import Karuselli from './Karuselli';

function Kivityot() {
  return (
    <div className="page-wrapper">
      <div className="page-content">
        <h1>Kivityöt</h1>
        <p></p>
          <h4>- Kivetykset</h4>
          <h4>- Kivimuurit</h4>
          <h4>- Kivikorit</h4>
          <h4>- Parkkipaikkojen kivetykset</h4>
          <h4>- Betonikivet</h4>
          <h4>- Luonnonkivet</h4>
      </div>
      <div className="carousel-container">
        <Karuselli folder="kivityot" imageCount={16}/>
      </div>
    </div>
  );
}

export default Kivityot;
