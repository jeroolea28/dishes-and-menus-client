import React, { useState, useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom'; 
import dishServices from '../../services/dish.services';
import { Link } from 'react-router-dom';
import './DishDetailCard.css'; // Import CSS file

function DishDetailCard() {
    const [dish, setDish] = useState(null);
    const { id } = useParams(); 

    useEffect(() => {
        dishServices.getSingleDish(id)
            .then(response => {
                setDish(response.data);
            })
            .catch(error => {
                console.error('Error fetching dish details:', error);
            });
    }, [id]);

    const { name, description, price, imageData } = dish || {};

    return (
        <Card className="d-flex flex-row dish-detail-card">
            <div className="dish-image-container">
                <Card.Img src={imageData} className="dish-image" />
            </div>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    <strong>Description:</strong> {description}
                    <br />
                    <strong>Price:</strong> ${price}
                </Card.Text>
            </Card.Body>

            <Link to={`/allDishes`} className="btn btn-primary"><strong>Back to Dish List</strong></Link>
        </Card>
    );
}

export default DishDetailCard;
