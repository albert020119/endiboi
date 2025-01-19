import React, { useState } from 'react';
import emailjs from '@emailjs/browser'; // Import EmailJS
import Navbar from '../Navbar'; // Import Navbar component
import '../styles.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [statusMessage, setStatusMessage] = useState(''); // To display success/error messages
  const [isSending, setIsSending] = useState(false); // To prevent duplicate submissions

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true); // Disable the button while sending

    // Replace with your actual EmailJS Service, Template, and Public Key
    const serviceID = 'your_service_id';
    const templateID = 'your_template_id';
    const publicKey = 'your_public_key';

    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then((response) => {
        setStatusMessage('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Reset form
      })
      .catch((error) => {
        setStatusMessage('Failed to send message. Please try a different method.');
      })
      .finally(() => {
        setIsSending(false); // Re-enable the button
      });
  };

  return (
    <div className="contact-page">
      <Navbar />
      <div className="contact-container">
        <h1>Contact Me</h1>
        <p>Feel free to reach out for collaborations or just a friendly chat!</p>
        <div className="contact-details">
          <p><strong>Phone:</strong> +40 722 808 391</p>
          <p><strong>Email:</strong> <a href="mailto:albert_endre@yahoo.com">albert_endre@yahoo.com</a></p>
          <div className="social-links">
            <a href="https://github.com/albert020119" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/endre-l%C3%A1szlo-albert-9b5b38201" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://instagram.com/albertdre/" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button type="submit" className="send-button" disabled={isSending}>
            {isSending ? 'Sending...' : 'Send'}
          </button>
        </form>
        {statusMessage && <p className="status-message">{statusMessage}</p>}
      </div>
    </div>
  );
};

export default ContactPage;
