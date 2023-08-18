import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://soriebsillah-portfolio.netlify.app/.netlify/functions/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        alert('Email sent successfully');
      } else {
        alert('An error occurred while sending the email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="content">
        <h2>Contact Us</h2>
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className='nameEmail'>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required value={name} onChange={(e) => setName(e.target.value)} />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="4" required value={message} onChange={(e) => setMessage(e.target.value)} />
            </div>
            <button type="submit" className="send-button">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
