import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './SingleBook.css';

function SingleBook({ book, setSelectedBook, selectedBook }) {
  const navigate = useNavigate();
  return (
    <Card
      className={`book-card ${selectedBook === book.asin ? 'selected' : ''}`}
      onClick={() => setSelectedBook(book.asin)}
    >
      <Card.Img variant="top" src={book.img} alt={book.title} className="book-image" />
      <Card.Body className="book-body">
        <Card.Title className="book-title">{book.title}</Card.Title>
        <Button variant="primary" className="mt-2" onClick={()=> navigate('/book/${book.asin}')} >Dettagli</Button>
      </Card.Body>
    </Card>
  );
}

export default SingleBook;


