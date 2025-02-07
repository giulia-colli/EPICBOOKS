import React, { useState, useEffect } from 'react';
import { Spinner, Alert } from 'react-bootstrap';
import CommentList from './CommentList';
import AddComment from './AddComment';

const API_URL = "https://striveschool-api.herokuapp.com/api/comments/";
const API_HEADERS = {
  "Content-Type": "application/json",
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzYyZGQ5MjUzMDRhNzAwMTUxNDhjNTIiLCJpYXQiOjE3Mzg5NDU0MTIsImV4cCI6MTc0MDE1NTAxMn0.S1QGV_Y5SUStul-UCn1ySzUAyVUo-4GPRAAV_Aj2p3I"
};

function CommentArea({ bookId }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!bookId) return; // Evita la fetch se nessun libro è selezionato

    const fetchComments = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${API_URL}${bookId}`, { headers: API_HEADERS });
        if (!response.ok) throw new Error("Errore nel recupero delle recensioni");
        const data = await response.json();
        setComments(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchComments();
  }, [bookId]); // Esegue una nuova fetch ogni volta che bookId cambia

  return (
    <div className="mt-3 p-3 border rounded" style={{ backgroundColor: "#f8f9fa" }}>
      <h5>Recensioni</h5>

      {loading && <Spinner animation="border" />}
      {error && <Alert variant="danger">{error}</Alert>}

      {comments.length > 0 ? (
        <CommentList comments={comments} />
      ) : (
        <p className="text-muted">Nessuna recensione disponibile</p>
      )}

      {/* Passiamo bookId a AddComment per aggiornarne elementId */}
      {bookId && <AddComment bookId={bookId} />}
    </div>
  );
}

export default CommentArea;
