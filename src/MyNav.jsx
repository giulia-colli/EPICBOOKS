import React from 'react';
import { Navbar, Nav, Container, Form } from 'react-bootstrap';

function MyNav({ searchQuery, setSearchQuery }) {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#">My Library</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Browse</Nav.Link>
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
