import React from 'react';
import { Container } from 'react-bootstrap';

function NotFound() {
  return (
    <Container className="text-center mt-5">
      <h1 className="text-danger">404</h1>
      <h2>Pagina non trovata</h2>
      <p>La pagina che stai cercando non esiste.</p>
    </Container>
  );
}

export default NotFound;
