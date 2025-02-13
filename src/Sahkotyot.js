// Sahkotyot.js
import React from 'react';
import Karuselli from './Karuselli';

function Sahkotyot() {
  return (
    <div className="page-wrapper">
      <div className="page-content">
        <h1>Sähkötyöt</h1>
        <p></p>
          <h4>- Kaapeloinnit</h4>
          <h4>- Kätkennät / Mittaukset</h4>
          <h4>- Mittatarkistuspöytäkirjan luonti rakennusvalvontaa ja lopputarkastuksia varten</h4>
          <h4>- S2-luvat</h4>
      </div>
      <div className="carousel-container">
     {/*   <Karuselli folder="sahkotyot" imageCount={} />  */}
      </div>
    </div>
  );
}

export default Sahkotyot;
