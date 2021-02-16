import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src="https://avatars.githubusercontent.com/u/79078406?s=200&v=4" style={{width:'40%'}} alt='logo' />
        </NavLink> 
        <Bars />
        <NavMenu>
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
        <NavBtn>
          <NavBtnLink to='/signin'>Join Us</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
