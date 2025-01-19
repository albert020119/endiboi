import React from 'react';
import Navbar from '../Navbar'; // Import Navbar component
import '../styles.css';

const ContactPage = () => {
  return (
    <div>
      <Navbar />
      <div className="content">
        <h1>Contact Page</h1>
        <p>Get in touch! I’d love to hear from you.</p>
        {/* Add your contact details below */}
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Your Name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Your Email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" placeholder="Your Message" />
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
