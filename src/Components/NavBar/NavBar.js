import { faSearch,  faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Navbar,Container,Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Nav.css';

const NavBar = () => {
    return (
        <Navbar collapseOnSelect className='Navbar-css' expand="lg" bg="white" >
      <Container>
        <Link className='logo'  to='/home'>
        <Navbar.Brand className='fs-2'   > <span className='span-E'>E-</span>Shop</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto link-css  ">
           <Nav.Link  href='/'>Men</Nav.Link>
           
           <Nav.Link href='/'>Women</Nav.Link>
           
           <Nav.Link href='/'>Kids</Nav.Link>
          </Nav>

          {/* icons nav */}

          <Nav className='link-css'>
            <Nav.Link href="#deets"><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></Nav.Link>
            <Nav.Link href="#deets"><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></Nav.Link>
            <Nav.Link href="#deets"><FontAwesomeIcon icon={faUser}></FontAwesomeIcon></Nav.Link>
            
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default NavBar;