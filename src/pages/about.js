import React from 'react';
import Photo from '../assets/about-photo.png';
const About = () => {
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
      
      <img src={Photo} alt="About us vector" className="img vert-move"/>
      <h1>About Us</h1>
    </div>
  );
};

export default About;
