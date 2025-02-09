import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyNav from './MyNav';
import MyFooter from './MyFooter';
import AllTheBooks from './AllTheBooks';
import Welcome from './Welcome';
import CommentArea from './CommentArea';
import NotFound from './NotFound';
import BookDetails from './BookDetails';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <Router>
      <MyNav searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Welcome />
      <Container className="mt-4">
        <Row>
          <Col md={8}>
            <Routes>
              <Route path="/" element={<AllTheBooks searchQuery={searchQuery} setSelectedBook={setSelectedBook} />} />
              <Route path="/book/:asin" element={<BookDetails />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Col>
          <Col md={4}>
            {selectedBook ? <CommentArea bookId={selectedBook} /> : <p className="text-muted text-center">Seleziona un libro per vedere le recensioni</p>}
          </Col>
        </Row>
      </Container>
      <MyFooter />
    </Router>
  );
}

export default App;

