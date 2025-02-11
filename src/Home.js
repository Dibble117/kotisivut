import React from 'react';
// import BookingForm from './BookingForm';

const Home = () => {
  return (
    <div className="main" style={{ padding: '32px' }}>
      <div className="row justify-content-center">
        <div className="col-lg-6 col-sm-12">
          <div className="row" style={{ marginBottom: '8px' }}>
            {/* <img src="/jbygg_transparent.png" alt="Jbygg Logo" style={{ maxWidth: '200px', marginRight: '10px' }} /> */}
            <h1 className="Lora" style={{ color: '#000000' }}><b>Jbygg</b></h1>
            <h3 className="Lora" style={{ color: '#000000' }}>Porvoo</h3>
          </div>
          <div className="contact-info" style={{ marginTop: '16px', color: '#000000', fontSize: '18px' }}>
            <p>
              <strong>Telephone:</strong> <a href="tel:+1234567890" style={{ color: '#000000' }}>+1234567890</a>
            </p>
            <p>
              <strong>Email:</strong> <a href="mailto:info@jbygg.fi" style={{ color: '#000000' }}>info@jbygg.fi</a>
            </p>
            <p>
              <strong>Address:</strong> Porvoo, Finland
            </p>
          </div>
          {/* <BookingForm /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
