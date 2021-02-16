import React from 'react';
import Photo from '../assets/home-photo.png';
import '.././App.css';
import Button from '@material-ui/core/Button';

const Home = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh',
        backgroundColor: '#fff3e2',
      }}
    >
      <h1>Home</h1>
      <Button variant="contained" color="secondary">
        Get started!
      </Button>
      <img src={Photo} alt="events photo" className="img vert-move" />
    
    </div>
  );
};

export default Home;
