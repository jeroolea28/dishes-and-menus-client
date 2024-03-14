import React, { useState, useEffect } from 'react';
import { Form, Button, Dropdown, Row, Col } from 'react-bootstrap';
import dishServices from '../../../services/dish.services';
import menuServices from '../../../services/menu.services';
import { useContext } from 'react';
import { AuthContext } from '../../../context/auth.context';

function MenuForm() {
    const [dishes, setDishes] = useState([]);
    const [selectedDishes, setSelectedDishes] = useState({ appetizers: [], mainDishes: [], desserts: [], drinks: [] });
    const [menuName, setMenuName] = useState('');
    const { user } = useContext(AuthContext);

    useEffect(() => {
        if (user) {
            dishServices
                .getAllDishes(user._id)
                .then(response => {
                    setDishes(response.data);
                })
                .catch(error => {
                    console.error('Error fetching dishes:', error);
                });
        }
    }, [user]);

    const handleDropdownChange = (selectedId, category) => {
        setSelectedDishes(prevSelected => {
            const isSelected = prevSelected[category].includes(selectedId);
            if (isSelected) {
                return {
                    ...prevSelected,
                    [category]: prevSelected[category].filter(id => id !== selectedId)
                };
            } else {
                return {
                    ...prevSelected,
                    [category]: [...prevSelected[category], selectedId]
                };
            }
        });
    };

    const renderSelectedDishes = (category) => {
        const selectedIds = selectedDishes[category];
        const selectedNames = selectedIds.map(id => {
            const selectedDish = dishes.find(dish => dish._id === id);
            return selectedDish ? selectedDish.name : '';
        });
        return selectedNames.join(', ');
    };

    const isDishSelected = (dishId, category) => {
        return selectedDishes[category].includes(dishId);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const menuData = {
            name: menuName,
            ...selectedDishes
        };
        menuServices.createMenu(menuData)
            .then(createdMenu => {
                console.log('Menu created:', createdMenu);
            })
            .catch(error => {
                console.error('Error creating menu:', error);
            });
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Row>
                <Col md={3}>
                    <Form.Group>
                        <Form.Label style={{ color: 'white' }}>Menu Name:</Form.Label>
                        <Form.Control
                            type="text"
                            value={menuName}
                            onChange={(e) => setMenuName(e.target.value)}
                            placeholder="Enter menu name"
                            required
                        />
                    </Form.Group>
                </Col>
            </Row>
            <br />
            <Row>
                <Col md={3}>
                    <Form.Group>
                        <Dropdown onSelect={(selectedId) => handleDropdownChange(selectedId, 'appetizers')}>
                            <Dropdown.Toggle variant="light" id="dropdown-appetizers">
                                Select Appetizers
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {dishes.map(dish => (
                                    dish.type === 'Appetizer' &&
                                    <Dropdown.Item
                                        key={dish._id}
                                        eventKey={dish._id}
                                        style={{ backgroundColor: isDishSelected(dish._id, 'appetizers') ? 'lightblue' : 'white', color: 'black' }}
                                    >
                                        {dish.name}
                                    </Dropdown.Item>
                                ))}
                            </Dropdown.Menu>
                        </Dropdown>
                        <p style={{ color: "white" }}>Appetizers selected: {renderSelectedDishes('appetizers')}</p>
                    </Form.Group>
                </Col>
            </Row>

            <Form.Group>
                <Dropdown onSelect={(selectedId) => handleDropdownChange(selectedId, 'mainDishes')}>
                    <Dropdown.Toggle variant="light" id="dropdown-mainDishes">
                        Select Main Dishes
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {dishes.map(dish => (
                            dish.type === 'Main' &&
                            <Dropdown.Item
                                key={dish._id}
                                eventKey={dish._id}
                                style={{ backgroundColor: isDishSelected(dish._id, 'mainDishes') ? 'lightblue' : 'white', color: 'black' }}
                            >
                                {dish.name}
                            </Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
                <p style={{ color: "white" }}>Main Dishes selected: {renderSelectedDishes('mainDishes')}</p>
            </Form.Group>

            <Form.Group>
                <Dropdown onSelect={(selectedId) => handleDropdownChange(selectedId, 'desserts')}>
                    <Dropdown.Toggle variant="light" id="dropdown-desserts">
                        Select Desserts
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {dishes.map(dish => (
                            dish.type === 'Dessert' &&
                            <Dropdown.Item
                                key={dish._id}
                                eventKey={dish._id}
                                style={{ backgroundColor: isDishSelected(dish._id, 'desserts') ? 'lightblue' : 'white', color: 'black' }}
                            >
                                {dish.name}
                            </Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
                <p style={{ color: "white" }}>Desserts selected: {renderSelectedDishes('desserts')}</p>
            </Form.Group>

            <Form.Group>
                <Dropdown onSelect={(selectedId) => handleDropdownChange(selectedId, 'drinks')}>
                    <Dropdown.Toggle variant="light" id="dropdown-drinks">
                        Select Drinks
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {dishes.map(dish => (
                            dish.type === 'Drink' &&
                            <Dropdown.Item
                                key={dish._id}
                                eventKey={dish._id}
                                style={{ backgroundColor: isDishSelected(dish._id, 'drinks') ? 'lightblue' : 'white', color: 'black' }}
                            >
                                {dish.name}
                            </Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
                <p style={{ color: "white" }}>Drinks selected: {renderSelectedDishes('drinks')}</p>
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default MenuForm;
