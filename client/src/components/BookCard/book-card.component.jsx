import React from 'react';

import Card from 'react-bootstrap/Card';

const BookCard = (props) => {
    return(

        <Card>
            <Card.Img variant="top" src={props.image} alt="" />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.author}
                    <br/>
                    {props.published}
                </Card.Text>
            </Card.Body>
            </Card>

        
    )
};

export default BookCard;