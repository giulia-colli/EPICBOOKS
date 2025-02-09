import React, { useState, useEffect } from 'react';
import { Spinner, Alert } from 'react-bootstrap';
import CommentList from './CommentList';
import AddComment from './AddComment';
import './CommentArea.css';


const API_URL = "https://striveschool-api.herokuapp.com/api/comments/";
const API_HEADERS = {
  "Content-Type": "application/json",
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzYyZGQ5MjUzMDRhNzAwMTUxNDhjNTIiLCJpYXQiOjE3MzkxMDMyNTksImV4cCI6MTc0MDMxMjg1OX0.NlsIC1GclNFLwp_l_L2mQZjMUF9IfA3AMXomzb1dSIY"
};

function CommentArea({ bookId }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!bookId) return;

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
  }, [bookId]);

  return (
    <div className="comment-area">
      <h5 className="comment-title">Recensioni</h5>

      {loading && <Spinner animation="border" className="text-light" />}
      {error && <Alert variant="danger">{error}</Alert>}

      {comments.length > 0 ? (
        <CommentList comments={comments} />
      ) : (
        <p className="text-center text-muted">Nessuna recensione disponibile</p>
      )}

      {bookId && <AddComment bookId={bookId} />}
    </div>
  );
}

export default CommentArea;
