import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function MyFooter() {
  return (
    <footer style={{ backgroundColor: '#212529', color: 'white', padding: '20px 0', marginTop: '40px' }}>
      <Container>
        <Row>
          {/* Sezione 1: Informazioni */}
          <Col md={4}>
            <h5>Chi Siamo</h5>
            <p>
              Il miglior e-commerce di libri, dove puoi trovare le ultime novità, i classici più amati e le edizioni
              speciali. Leggere è un viaggio, e noi siamo qui per guidarti.
            </p>
          </Col>

          {/* Sezione 2: Link Utili */}
          <Col md={4}>
            <h5>Link Utili</h5>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Contattaci</a></li>
              <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Spedizioni e Resi</a></li>
              <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Termini e Condizioni</a></li>
              <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Lavora con noi</a></li>
            </ul>
          </Col>

          {/* Sezione 3: Social e Pagamenti */}
          <Col md={4}>
            <h5>Seguici</h5>
            <p>Resta aggiornato sulle novità e offerte speciali!</p>
            <div>
              <a href="#" style={{ marginRight: '10px', color: 'white' }}>📘 Facebook</a>
              <a href="#" style={{ marginRight: '10px', color: 'white' }}>📷 Instagram</a>
              <a href="#" style={{ marginRight: '10px', color: 'white' }}>🐦 Twitter</a>
            </div>
           
          </Col>
        </Row>

        {/* Copyright */}
        <Row className="mt-3">
          <Col className="text-center">
            <p style={{ margin: 0 }}>© {new Date().getFullYear()} MyBookStore. Tutti i diritti riservati.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default MyFooter;
