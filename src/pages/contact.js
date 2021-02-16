import React from 'react';
import Photo from '../assets/contact-photo.png';
const Contact = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh',
        backgroundColor: '#ffd4a9',
      }}
    >
      <h1>Contact Us</h1>
      <img src={Photo} alt="contact us vector" className="img vert-move" />
    </div>
  );
};

export default Contact;
