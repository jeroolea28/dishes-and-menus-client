import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './DishCard.css'

const DishCard = ({dish}) => {
  return (
    <Card className="DishCard">
      <div className="image-container">
        <Card.Img variant="top" src={dish.image} alt={dish.name} />
      </div>
      <Card.Body>
        <Card.Title>{dish.name}</Card.Title>
        <Card.Text>Price: {dish.price}</Card.Text>
        <Card.Text>{dish.description}</Card.Text>
        <Button variant="primary">Details</Button>
      </Card.Body>
    </Card>
  )
}

export default DishCard
