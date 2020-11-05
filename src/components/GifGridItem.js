import React from 'react';
import {Card} from 'react-bootstrap';
import '../index.css';

const GifGridItem = ({title, url}) => {

    return (
    <Card className="card animate__animated animate__fadeIn ">
            <Card.Img variant="top"  src={url} />
        <Card.Body>
            <Card.Title>{title}</Card.Title>
        </Card.Body>
    </Card>
    )
}

export default GifGridItem;