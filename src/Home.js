import React from 'react';
import ContactForm from './ContactForm';

const Home = () => {
  const puhelin = '+358408675730';
  const email = 'jbyggoy@gmail.com';

  return (
    <div className="main" style={{ padding: '32px' }}>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          maxWidth: '1200px',
          margin: '0 auto'
        }}
      >
        {/* Left side: Contact info */}
        <div style={{ flex: '1', minWidth: '300px', paddingRight: '16px' }}>
          <div style={{ marginBottom: '8px' }}>
            {/* You can uncomment the image if needed */}
            {/* <img src="/jbygg_transparent.png" alt="Jbygg Logo" style={{ maxWidth: '200px', marginRight: '10px' }} /> */}
          {/*  <h1 className="Lora" style={{ color: '#000000', fontSize: '50px' }}><b>Jbygg</b></h1>  */}
          {/*  <h3 className="Lora" style={{ color: '#000000' }}>Porvoo</h3>  */}
          </div>
          <div className="contact-info" style={{ marginTop: '16px', color: '#000000', fontSize: '20px' }}>
            <p>
              <strong>Joni Pirtelä</strong>
            </p>
            <p>
              <strong>Puhelin:</strong> <a href={`tel:${puhelin}`} style={{ color: '#000000' }}>{puhelin}</a>
            </p>
            <p>
              <strong>Sähköposti:</strong> <a href={`mailto:${email}`} style={{ color: '#000000' }}>{email}</a>
            </p>
          </div>
          <div className="company-info" style={{ marginTop: '24px', color: '#000000', fontSize: '20px' }}>
            <h2>Rakennustyöt Porvoossa ja lähialueilla</h2>
            <p>
              Jbygg on rakennusalan yritys, joka tarjoaa monipuolisia palveluita rakennusprojektien toteuttamiseen.
              Lisätietoja ja kuvia töistämme löydät klikkaamalla linkkejä yläpalkista.
              Ota yhteyttä ja pyydä tarjous!
            </p>
          </div>
        </div>

        {/* Right side: Contact form */}
        <div style={{ flex: '1', minWidth: '300px', paddingLeft: '16px' }}>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Home;
