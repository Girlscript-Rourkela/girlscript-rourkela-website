import React from 'react';
import Photo from '../assets/events-photo.png';

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
      <h1>Events</h1>
      <img src={Photo} alt="events photo" className="img vert-move" />
    </div>
  );
};

export default About;
