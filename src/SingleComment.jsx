import React, { useState } from 'react';
import { ListGroup, Button, Form } from 'react-bootstrap';

function SingleComment({ comment, onDelete, onUpdate }) {
  const [editMode, setEditMode] = useState(false);
  const [updatedText, setUpdatedText] = useState(comment.comment);
  const [updatedRate, setUpdatedRate] = useState(comment.rate);

  return (
    <ListGroup.Item>
      {editMode ? (
        <>
          <Form.Control
            type="text"
            value={updatedText}
            onChange={(e) => setUpdatedText(e.target.value)}
          />
          <Form.Control
            as="select"
            value={updatedRate}
            onChange={(e) => setUpdatedRate(e.target.value)}
            className="mt-2"
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </Form.Control>
        </>
      ) : (
        <>
          {comment.comment} - <strong>Voto:</strong> {comment.rate}/5
        </>
      )}

      <div className="mt-2">
        {editMode ? (
          <Button variant="success" size="sm" onClick={() => {
            onUpdate(comment._id, updatedText, updatedRate);
            setEditMode(false);
          }}>
            Salva
          </Button>
        ) : (
          <Button variant="warning" size="sm" onClick={() => setEditMode(true)}>
            Modifica
          </Button>
        )}
        <Button variant="danger" size="sm" className="ms-2" onClick={() => onDelete(comment._id)}>
          Elimina
        </Button>
      </div>
    </ListGroup.Item>
  );
}

export default SingleComment;
