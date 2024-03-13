import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MenuImage from '../../assets/Menu.png'; 

function MenuCard({ name, id, onDelete }) {
  return (
    <Card>
      <Card.Img variant="top" src={MenuImage} /> 
      <Card.Body>
        <Card.Title><strong>{name}</strong></Card.Title>
        <div className='buttons'>
          <Button as={Link} to={`/menu/${id}`} variant="primary">View</Button>
          <Button onClick={() => onDelete(id)} variant="danger">Delete</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default MenuCard;
