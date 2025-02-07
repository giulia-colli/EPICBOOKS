import React from 'react';
import { Card } from 'react-bootstrap';
import './SingleBook.css';

function SingleBook({ book, setSelectedBook, selectedBook }) {
  return (
    <Card
      className={`book-card ${selectedBook === book.asin ? 'selected' : ''}`}
      onClick={() => setSelectedBook(book.asin)}
    >
      <Card.Img variant="top" src={book.img} alt={book.title} className="book-image" />
      <Card.Body className="book-body">
        <Card.Title className="book-title">{book.title}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default SingleBook;


