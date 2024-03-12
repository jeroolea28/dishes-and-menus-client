import React, { useState, useEffect } from 'react';
import { Form, Button, Dropdown } from 'react-bootstrap';
import dishServices from '../../../services/dish.services';
import { useContext } from 'react';
import { AuthContext } from '../../../context/auth.context';

function MenuForm() {
    const [dishes, setDishes] = useState([]);
    const [selectedDishes, setSelectedDishes] = useState({ appetizers: [], mains: [], desserts: [], drinks: [] });
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
        console.log('Selected dishes:', selectedDishes);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Select Appetizers:</Form.Label>
                <Dropdown onSelect={(selectedId) => handleDropdownChange(selectedId, 'appetizers')}>
                    <Dropdown.Toggle variant="success" id="dropdown-appetizers">
                        Select Appetizers
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {dishes.map(dish => (
                            dish.type === 'Appetizer' &&
                            <Dropdown.Item
                                key={dish._id}
                                eventKey={dish._id}
                                style={{ backgroundColor: isDishSelected(dish._id, 'appetizers') ? 'lightblue' : 'white' }}
                            >
                                {dish.name}
                            </Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
                <p>Appetizers selected: {renderSelectedDishes('appetizers')}</p>
            </Form.Group>
            
            <Form.Group>
                <Form.Label>Select Mains:</Form.Label>
                <Dropdown onSelect={(selectedId) => handleDropdownChange(selectedId, 'mains')}>
                    <Dropdown.Toggle variant="success" id="dropdown-mains">
                        Select Mains
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {dishes.map(dish => (
                            dish.type === 'Main' &&
                            <Dropdown.Item
                                key={dish._id}
                                eventKey={dish._id}
                                style={{ backgroundColor: isDishSelected(dish._id, 'mains') ? 'lightblue' : 'white' }}
                            >
                                {dish.name}
                            </Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
                <p>Mains selected: {renderSelectedDishes('mains')}</p>
            </Form.Group>

            <Form.Group>
                <Form.Label>Select Desserts:</Form.Label>
                <Dropdown onSelect={(selectedId) => handleDropdownChange(selectedId, 'desserts')}>
                    <Dropdown.Toggle variant="success" id="dropdown-desserts">
                        Select Desserts
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {dishes.map(dish => (
                            dish.type === 'Dessert' &&
                            <Dropdown.Item
                                key={dish._id}
                                eventKey={dish._id}
                                style={{ backgroundColor: isDishSelected(dish._id, 'desserts') ? 'lightblue' : 'white' }}
                            >
                                {dish.name}
                            </Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
                <p>Desserts selected: {renderSelectedDishes('desserts')}</p>
            </Form.Group>

            <Form.Group>
                <Form.Label>Select Drinks:</Form.Label>
                <Dropdown onSelect={(selectedId) => handleDropdownChange(selectedId, 'drinks')}>
                    <Dropdown.Toggle variant="success" id="dropdown-drinks">
                        Select Drinks
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {dishes.map(dish => (
                            dish.type === 'Drink' &&
                            <Dropdown.Item
                                key={dish._id}
                                eventKey={dish._id}
                                style={{ backgroundColor: isDishSelected(dish._id, 'drinks') ? 'lightblue' : 'white' }}
                            >
                                {dish.name}
                            </Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
                <p>Drinks selected: {renderSelectedDishes('drinks')}</p>
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default MenuForm;
