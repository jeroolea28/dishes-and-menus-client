import React from 'react'
import { Card, Button } from 'react-bootstrap'
import './DishCard.css'

function DishCard({ name, description, imageData, price }) {
  return (
    <Card>
      <div className="card-img-container">
        <Card.Img src={imageData} className="card-img" />
      </div>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text className="card-description">
          <strong>Description:</strong> {description}
          <br />
          <strong>Price:</strong> ${price}
        </Card.Text>
        <Button variant='primary'>Details</Button>
      </Card.Body>
    </Card>
  )
}

export default DishCard
