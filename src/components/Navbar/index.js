import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
} from './NavbarElements';
import Button from '@material-ui/core/Button';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src="https://avatars.githubusercontent.com/u/79078406?s=200&v=4" style={{width:'40%'}} alt='logo' />
        </NavLink> 
        <Bars />
        <NavMenu>
          <NavLink to='/' activeStyle>
            Home
          </NavLink>
          <NavLink to='/about' activeStyle>
            About Us
          </NavLink>
          <NavLink to='/events' activeStyle>
            Events
          </NavLink>
          
          <NavLink to='/team' activeStyle>
            Team
          </NavLink>
          <NavLink to='/contact-us' activeStyle>
            Contact Us
          </NavLink>
        </NavMenu>  
        <Button variant="contained" href="https://www.girlscript.tech/registration" size="sm" color="secondary" style={{backgroundColor:'#fa691d',height:'80%',marginTop:'1%'}}>
        Join Us
      </Button>
      </Nav>
    </>
  );
};

export default Navbar;
