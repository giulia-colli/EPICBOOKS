import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card, Spinner, Alert } from 'react-bootstrap';
import CommentArea from './CommentArea';

const BOOKS_API = "https://striveschool-api.herokuapp.com/api/comments/";
const API_HEADERS = {
  "Content-Type": "application/json",
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzYyZGQ5MjUzMDRhNzAwMTUxNDhjNTIiLCJpYXQiOjE3MzkxMDMyNTksImV4cCI6MTc0MDMxMjg1OX0.NlsIC1GclNFLwp_l_L2mQZjMUF9IfA3AMXomzb1dSIY"
};

function BookDetails() {
  const { asin } = useParams(); // Recupera il parametro ASIN dall'URL
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await fetch(`${BOOKS_API}${asin}`);
        if (!response.ok) throw new Error("Errore nel caricamento del libro");
        const data = await response.json();
        setBook(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBookDetails();
  }, [asin]); // Esegue la fetch quando cambia l'asin

  if (loading) return <Spinner animation="border" />;
  if (error) return <Alert variant="danger">{error}</Alert>;

  return (
    <Container className="mt-4">
      {book ? (
        <Card>
          <Card.Img variant="top" src={book.image} alt={book.title} />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <Card.Text><strong>Categoria:</strong> {book.category}</Card.Text>
            <Card.Text><strong>Prezzo:</strong> €{book.price}</Card.Text>
          </Card.Body>
        </Card>
      ) : (
        <p>Libro non trovato.</p>
      )}

      {/* Mostra la sezione recensioni */}
      <CommentArea bookId={asin} />
    </Container>
  );
}

export default BookDetails;
