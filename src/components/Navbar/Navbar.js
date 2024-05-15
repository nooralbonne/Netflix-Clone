import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import logo from './logo512.png'; // Import the image
import './Navbar.css';
// import FavList from './components/FavList/FavList'

export default function CustomNavbar() {
  return (
    <Navbar className="navbar-width fixed-top" variant='dark' style={{ backgroundColor: 'royalblue', opacity: '0.9' }}>
      <Container>
        <img
          src={logo}
          width=""
          height="40"
          className="d-inline-block align-top"
          alt="FilmFlow logo" 
          style={{ margin: '0px 10px 0px 0px' }}
        />
        <Navbar.Brand href="#home" style={{ fontSize: '25px', fontWeight: 'bold' }}>FilmFlow</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/" className="navbar-link">Home</Nav.Link>
          <Nav.Link href="/FavList" className="navbar-link">Favorite List</Nav.Link>
          {/* Add other navigation links as needed */}
        </Nav>
      </Container>
    </Navbar>
  );
}
