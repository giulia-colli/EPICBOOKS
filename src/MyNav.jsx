import React from 'react';
import { Navbar, Nav, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function MyNav({ searchQuery, setSearchQuery }) {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
      <Navbar.Brand as={Link} to="/">My Library</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/books">Browse</Nav.Link>
          </Nav>

          {/* Input di ricerca nella navbar */}
          <Form.Control
            type="text"
            placeholder="Cerca un libro..."
            value={searchQuery} // Legge lo stato da App.js
            onChange={(e) => setSearchQuery(e.target.value)} // Modifica lo stato in App.js
            style={{ width: "250px" }}
          />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;
