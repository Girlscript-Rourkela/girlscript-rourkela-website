import React from 'react';
import Photo from '../assets/contact-photo.png';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import LocationOnIcon from '@material-ui/icons/LocationOn';

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
      <h1>Gotta Query? We are here</h1>
      {"\n"}
      <br />
      <LocationOnIcon />
      <Button variant="contained" color="secondary">
        Drop us a mail !
      </Button>
      <InstagramIcon />
      <GitHubIcon />
      <FacebookIcon />
      <LinkedInIcon />
      <TwitterIcon />

      
      <img src={Photo} alt="contact us vector" className="img vert-move" />
    </div>
  );
};

export default Contact;
