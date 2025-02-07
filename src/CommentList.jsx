import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import SingleComment from './SingleComment';

function CommentList({ comments, onDelete, onUpdate }) {
  return (
    <ListGroup className="mt-3">
      {comments.length > 0 ? (
        comments.map((comment) => (
          <SingleComment
            key={comment._id}
            comment={comment}
            onDelete={onDelete}
            onUpdate={onUpdate}
          />
        ))
      ) : (
        <p className="text-muted">Nessuna recensione disponibile</p>
      )}
    </ListGroup>
  );
}

export default CommentList;
