import React from 'react'
import { Card, Button } from 'react-bootstrap'

function DishCard({ name, description, imageData, price }) {
  return (
    <Card>
      <Card.Img src={imageData} />
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
