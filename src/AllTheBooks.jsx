import React from 'react';
import horrorBooks from './horror.json'; // Importa il file JSON
import { Container, Row, Col, Card } from 'react-bootstrap';
import './AllTheBooks.css';

function AllTheBooks() {
  return (
    <Container className="mt-5">
      
      <Row>
        {horrorBooks.map((book) => (
          <Col key={book.asin} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card className="book-card">
              <Card.Img variant="top" src={book.img} alt={book.title} className="book-image" />
              <Card.Body className="book-body">
                <Card.Title className="text-center">{book.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default AllTheBooks;
