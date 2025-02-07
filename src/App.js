import React, { useState } from 'react';
import MyNav from './MyNav';
import MyFooter from './MyFooter';
import AllTheBooks from './AllTheBooks';
import Welcome from './Welcome';
import CommentArea from './CommentArea';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBook, setSelectedBook] = useState(null); // Stato per il libro selezionato

  return (
    <div className="App">
      <MyNav searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Welcome />
      <Container className="mt-4">
        <Row>
          {/* Colonna sinistra: Libri */}
          <Col md={8}>
            <AllTheBooks searchQuery={searchQuery} setSelectedBook={setSelectedBook} selectedBook={selectedBook} />
          </Col>
          
          {/* Colonna destra: Commenti */}
          <Col md={4}>
            {selectedBook ? (
              <CommentArea bookId={selectedBook} />
            ) : (
              <p className="text-muted text-center">Seleziona un libro per vedere le recensioni</p>
            )}
          </Col>
        </Row>
      </Container>
      <MyFooter />
    </div>
  );
}

export default App;
