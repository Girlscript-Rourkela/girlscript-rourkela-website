import React from 'react';
import Photo from '../../assets/contact-photo.png';
import './contact.css'
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
      <span style={{
      }}>
      <h1 className="h1" >Gotta Query?</h1>
      <h2 className="h2" >We are here</h2>
      <span style={{
        justifyContent:'center',
        display:'inline-block',
        padding:'5px',
        textAlign:'center',
        marginLeft:'25px'
      }}>
      <LocationOnIcon style={{
        marginLeft:'15px'
      }} />
      Rourkela, Odissa India</span>
      <br></br>
      <Button variant="contained" color="secondary"
      style={{
        marginLeft:'70px',
        marginBottom:'30px',
        marginTop:'20px',
        display:'inline-block'
      }}>
        Drop us a mail !
      </Button>
      <br></br>
      <span classname="icon">
      <InstagramIcon  className="icons"  style={{
        marginLeft:'80px',
      }} />
      <GitHubIcon className="icons"/>
      <FacebookIcon className="icons" />
      <LinkedInIcon  className="icons"/>
      <TwitterIcon className="icons"/>
      </span>
      
      </span>
      
      <img src={Photo} alt="contact us vector" className="img vert-move" />
    </div>
  );
};

export default Contact;
