import React from 'react';
import './App.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
        <div className='row justify-content-center'>
        <div className='col-lg-6 col-sm-12'>
      <div className="footer-content">
        <p>&copy; {currentYear} Little Lemon. All rights reserved.</p>
      </div>
        </div>
        </div>
    </footer>
  );
}

export default Footer;
