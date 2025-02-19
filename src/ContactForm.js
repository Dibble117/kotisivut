// ContactForm.js
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  // State for each form field
  const [from_name, setName] = useState('');
  const [from_email, setEmail] = useState('');
  const [from_phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState(false);

  // Handlers for each field
  const handleNameChange = (e) => {
    if (formSubmitted) setFormSubmitted(false);
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    if (formSubmitted) setFormSubmitted(false);
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    if (formSubmitted) setFormSubmitted(false);
    setPhone(e.target.value);
  };

  const handleMessageChange = (e) => {
    if (formSubmitted) setFormSubmitted(false);
    setMessage(e.target.value);
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate that at least one contact method is provided
    if (!from_email && !from_phone) {
      alert("Anna joko sähköposti tai puhelinnumero, jotta voimme vastata viestiisi.");
      return;
    }
    
    const templateParams = { from_name, from_email, from_phone, message };
    
    // Debug: Log the template parameters and public key value
    console.log("Sending email with template params:", templateParams);
    console.log("Public Key:", process.env.REACT_APP_EMAILJS_PUBLIC_KEY);

    setIsSending(true);

    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      templateParams,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    )
    .then((result) => {
      console.log('Email successfully sent!', result.text);
      setFormSubmitted(true);
      // Clear form fields on successful submission
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
      setIsSending(false);
    }, (error) => {
      setError(true);
      console.error('Failed to send email. Error:', error.text);
      setIsSending(false);
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto', padding: '16px' }}>
      <div style={{ marginBottom: '8px' }}>
        <input
          type="text"
          placeholder="Nimi"
          value={from_name}
          onChange={handleNameChange}
          required
          style={{ width: '100%', padding: '8px' }}
        />
      </div>
      <div style={{ marginBottom: '8px' }}>
        <input
          type="email"
          placeholder="Sähköposti"
          value={from_email}
          onChange={handleEmailChange}
          style={{ width: '100%', padding: '8px' }}
        />
      </div>
      <div style={{ marginBottom: '8px' }}>
        <input
          type="tel"
          placeholder="Puhelin"
          value={from_phone}
          onChange={handlePhoneChange}
          style={{ width: '100%', padding: '8px' }}
        />
      </div>
      <div style={{ marginBottom: '8px' }}>
        <textarea
          placeholder="Viesti"
          value={message}
          onChange={handleMessageChange}
          required
          style={{ width: '100%', padding: '8px', minHeight: '150px' }}
        />
      </div>
      {formSubmitted && (
        <p style={{ color: 'green', fontSize: '30px', fontWeight: 'bold' }}>
          Viesti lähetetty onnistuneesti! Otamme teihin yhteyttä mahdollisimman pian.
        </p>
      )}
      {error && (
        <p style={{ color: 'red', fontSize: '30px', fontWeight: 'bold' }}>
          Viestin lähettäminen epäonnistui. Kokeile viestin lähettämistä laitteen sähköpostisovelluksella tai soita.
        </p>
      )}
      <button
        type="submit"
        style={{ padding: '10px 20px', fontSize: '16px', marginBottom: '16px' }}
        disabled={isSending} // Disable the button when sending
      >
        {isSending ? 'Lähetetään...' : 'Lähetä viesti'}
      </button>
    </form>
  );
};

export default ContactForm;
