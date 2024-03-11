import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './DishCard.css'

function DishCard({ name, description, imageData, price, id }) {
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
        <Link to={`/dish/${id}`} className="btn btn-primary">Details</Link>
      </Card.Body>
    </Card>
  )
}

export default DishCard
