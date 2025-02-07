import React from 'react';
import horrorBooks from './horror.json';
import { Container, Row, Col } from 'react-bootstrap';
import SingleBook from './SingleBook';


function AllTheBooks({ searchQuery, setSelectedBook, selectedBook }) {
  const filteredBooks = horrorBooks.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container>
      

      <Row>
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <Col key={book.asin} xs={12} sm={6} md={4} lg={3} className="mb-4 d-flex">
              <SingleBook book={book} setSelectedBook={setSelectedBook} selectedBook={selectedBook} />
            </Col>
          ))
        ) : (
          <p className="text-center text-muted">Nessun libro trovato...</p>
        )}
      </Row>
    </Container>
  );
}

export default AllTheBooks;
