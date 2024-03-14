import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom'; 
import { Link } from 'react-router-dom';
import menuServices from '../../services/menu.services';
import MenuImage from './../../assets/Menu.png'
import './MenuDetailCard.css';

function MenuDetailCard() {
    const [menu, setMenu] = useState(null);
    const { id } = useParams(); 

    useEffect(() => {
        menuServices.getMenu(id)
            .then(response => {
                setMenu(response.data);
            })
            .catch(error => {
                console.error('Error fetching menu details:', error);
            });
    }, [id]);

    const handleDelete = () => {
        menuServices.deleteMenu(id)
            .then(() => {
                console.log('Menu deleted successfully');
            })
            .catch(error => {
                console.error('Error deleting menu:', error);
            });
    };

    return (
        <Card className="d-flex flex-row menu-detail-card">
            <div className="menu-image-container">
                <Card.Img src={MenuImage} className="menu-image" />
            </div>
            <Card.Body>
                <Card.Title>{menu?.name}</Card.Title>
                <Card.Text>
                    <br />
                </Card.Text>
                <Row>
                    <Col>
                        <h4>Appetizers</h4>
                        <ul>
                            {menu?.appetizers.map(appetizer => (
                                <li key={appetizer._id}>{appetizer.name}</li>
                            ))}
                        </ul>
                    </Col>
                    <Col>
                        <h4>Main Dishes</h4>
                        <ul>
                            {menu?.mainDishes.map(mainDish => (
                                <li key={mainDish._id}>{mainDish.name}</li>
                            ))}
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h4>Desserts</h4>
                        <ul>
                            {menu?.desserts.map(dessert => (
                                <li key={dessert._id}>{dessert.name}</li>
                            ))}
                        </ul>
                    </Col>
                    <Col>
                        <h4>Drinks</h4>
                        <ul>
                            {menu?.drinks.map(drink => (
                                <li key={drink._id}>{drink.name}</li>
                            ))}
                        </ul>
                    </Col>
                </Row>
                <br />
                <div className='buttons'>
                    <Link to={`/allMenus`} className="btn btn-primary"><strong>Back to Dish List</strong></Link>
                    <Button onClick={handleDelete} variant="danger"><strong>Delete</strong></Button>
                </div>
            </Card.Body>
        </Card>
    );
}

export default MenuDetailCard;
