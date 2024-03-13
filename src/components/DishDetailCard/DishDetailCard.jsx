import React, { useState, useEffect } from 'react';
import { Button, Card, Modal } from 'react-bootstrap';
import { useParams } from 'react-router-dom'; 
import dishServices from '../../services/dish.services';
import { Link } from 'react-router-dom';
import './DishDetailCard.css';
import DishForm from './../Forms/DishForm/DishForm';

function DishDetailCard() {
    const [dish, setDish] = useState(null);
    const [modalShow, setModalShow] = useState(false);
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

    const handleEdit = () => {
        setModalShow(true);
    };

    const handleCloseModal = () => {
        setModalShow(false);
    };

    const updateDishDetails = (updatedDish) => {
        setDish(updatedDish);
    };

    return (
        <Card className="d-flex flex-row dish-detail-card">
            <div className="dish-image-container">
                <Card.Img src={dish?.imageData} className="dish-image" />
            </div>
            <Card.Body>
                <Card.Title>{dish?.name}</Card.Title>
                <Card.Text>
                    <strong>Description:</strong> {dish?.description}
                    <br />
                    <strong>Ingredients:</strong>
                    <ul>
                        {dish?.ingredients && dish?.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                    <strong>Price:</strong> ${dish?.price}
                </Card.Text>
            </Card.Body>
            <div className='buttons'>
                <Link to={`/allDishes`} className="btn btn-primary"><strong>Back to Dish List</strong></Link>
                <Button variant="secondary" onClick={handleEdit}>Edit</Button>
                <Button variant="danger" className="delete-btn">Delete</Button>
            </div>
            <Modal show={modalShow} onHide={handleCloseModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Dish</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <DishForm dishId={id} closeModal={handleCloseModal} updateDishDetails={updateDishDetails} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
                </Modal.Footer>
            </Modal>
        </Card>
    );
}

export default DishDetailCard;
