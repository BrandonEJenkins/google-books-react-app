import React from 'react';

import BookCard from '../BookCard/book-card.component';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const BookList = (props) => {
    return(
        <Container>
            <Row>

                    {
                        props.books.map((book, i) => (
                            <Col className="mb-2" xs={12} md={3}>

                            <BookCard 
                                        key={i}
                                        image={book.volumeInfo.imageLinks.thumbnail}
                                        title={book.volumeInfo.title}
                                        author={book.volumeInfo.authors}
                                        published={book.volumeInfo.publishedDate}
                                    />
                            </Col>
                        ))
                    }

                
            </Row>
        </Container>
    )
};

export default BookList;