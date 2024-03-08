import React from 'react'
import { Card, Button } from 'react-bootstrap'

function DishCard({ name, description, image, price }) {
  return (
    <Card>
      {image && <Card.Img variant='top' src={image} />}
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
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
