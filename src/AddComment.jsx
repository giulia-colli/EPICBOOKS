import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const API_URL = "https://striveschool-api.herokuapp.com/api/comments/";
const API_HEADERS = {
  "Content-Type": "application/json",
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzYyZGQ5MjUzMDRhNzAwMTUxNDhjNTIiLCJpYXQiOjE3MzkxMDMyNTksImV4cCI6MTc0MDMxMjg1OX0.NlsIC1GclNFLwp_l_L2mQZjMUF9IfA3AMXomzb1dSIY"
};

function AddComment({ bookId }) {
  const [text, setText] = useState('');
  const [rating, setRating] = useState(1);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newComment = {
      comment: text,
      rate: parseInt(rating),
      elementId: bookId // Passiamo il bookId aggiornato
    };

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: API_HEADERS,
        body: JSON.stringify(newComment)
      });

      if (!response.ok) throw new Error("Errore nell'invio della recensione");

      setText('');
      setRating(1);
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="mt-3">
      <Form.Group>
        <Form.Label>Scrivi una recensione:</Form.Label>
        <Form.Control type="text" value={text} onChange={(e) => setText(e.target.value)} />
      </Form.Group>
      <Button type="submit" className="mt-3">Invia</Button>
    </Form>
  );
}

export default AddComment;
