import React, { useContext, useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Toast from 'react-bootstrap/Toast';
import './DishForm.css';
import dishServices from '../../../services/dish.services';
import uploadServices from '../../../services/upload.services';
import { DISH_SPICYNESS, DISH_TYPES, INITIAL_DISH_DATA } from '../../../consts/dish.consts';
import IngredientRow from './IngredientRow';
import { AuthContext } from '../../../context/auth.context';

function DishForm({ dishId, closeModal, updateDishDetails }) {
    const [formData, setFormData] = useState(INITIAL_DISH_DATA);
    const [isLoading, setIsLoading] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        if (dishId) {
            dishServices.getSingleDish(dishId)
                .then(response => {
                    setFormData(response.data);
                })
                .catch(error => {
                    console.error('Error fetching dish details:', error);
                });
        }
    }, [dishId]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    const handleIngredientAdd = () => {
        if (formData.newIngredient.trim() !== '') {
            setFormData((prevData) => ({
                ...prevData,
                ingredients: [...prevData.ingredients, prevData.newIngredient.trim()],
                newIngredient: '',
            }));
        }
    };

    const handleIngredientInputChange = (e) => {
        const { name, value, key } = e.target;
        if (key === 'Enter') {
            handleIngredientAdd();
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };

    const handleIngredientRemove = (index) => {
        setFormData((prevFormData) => {
            const updatedIngredients = [...prevFormData.ingredients];
            updatedIngredients.splice(index, 1);
            return { ...prevFormData, ingredients: updatedIngredients };
        });
    };

    const handleSwitchChange = (fieldName) => {
        return (e) => {
            setFormData((prevData) => ({
                ...prevData,
                [fieldName]: e.target.checked,
            }));
        };
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const { name, description, price, spiciness, vegetarian, vegan, imageData, type } = formData;

        if (name && description && price && spiciness !== undefined && vegetarian !== undefined && vegan !== undefined && imageData !== undefined && type !== undefined) {
            const formDataWithUser = {
                ...formData,
                owner: user._id,
            };

            if (dishId) {
                dishServices
                    .editDish(dishId, formDataWithUser)
                    .then(() => {
                        console.log('Dish updated successfully');
                        setShowToast(true)
                        closeModal();
                        updateDishDetails(formDataWithUser);
                    })
                    .catch((error) => {
                        console.error('Error updating dish:', error);
                    });
            } else {
                dishServices
                    .saveDish(formDataWithUser)
                    .then(() => {
                        console.log('Dish created successfully');
                        setShowToast(true);
                    })
                    .catch((error) => {
                        console.error('Error saving dish:', error);
                    });
            }
        } else {
            console.error('Error: Missing required fields');
        }
    };

    const handleFileUpload = (e) => {
        const imageFormData = new FormData();
        imageFormData.append('imageData', e.target.files[0]);

        setIsLoading(true);

        uploadServices
            .uploadImage(imageFormData)
            .then((res) => {
                setFormData((prevFormData) => ({
                    ...prevFormData,
                    imageData: res.data.cloudinary_url,
                }));
            })
            .catch((err) => console.log(err))
            .finally(() => setIsLoading(false));
    }


    return (
        <Form onSubmit={handleFormSubmit} disabled={isLoading}>
            {isLoading && (
                <div className="d-flex justify-content-center">
                    <div className="spinner-border text-primary" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            )}
            <Row className='mb-3'>
                <Form.Group as={Col} controlId='formGridName'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type='dish'
                        placeholder='Enter Dish name'
                        name='name'
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group as={Col} controlId='formGridPrice'>
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                        type='price'
                        placeholder='Enter Price'
                        name='price'
                        value={formData.price}
                        onChange={handleInputChange}
                    />
                </Form.Group>
            </Row>

            <Form.Group className='mb-3' controlId='formDescription'>
                <Form.Label>Description</Form.Label>
                <Form.Control
                    as='textarea'
                    rows={3}
                    name='description'
                    value={formData.description}
                    onChange={handleInputChange}
                />
            </Form.Group>

            <Form.Group className='mb-3' controlId='formIngredients'>
                <Form.Label>Ingredients</Form.Label>
                <Row className='align-items-center'>
                    <Col xs={9}>
                        <div className='ingredient-list'>
                            {formData.ingredients.map((ingredient, index) => (
                                <IngredientRow key={index} ingredient={ingredient} index={index} handleIngredientRemove={handleIngredientRemove} />
                            ))}
                        </div>
                        <Form.Control
                            type='text'
                            placeholder='Add ingredient'
                            name='newIngredient'
                            value={formData.newIngredient || ''}
                            onChange={handleIngredientInputChange}
                            onKeyDown={(e) => e.key === 'Enter' && e.preventDefault()}
                        />
                    </Col>
                    <Col xs={3}>
                        <Button onClick={handleIngredientAdd}>Add</Button>
                    </Col>
                </Row>
            </Form.Group>

            <Form.Group className="mb-3" controlId="image">
                <Form.Label>Image(URL)</Form.Label>
                <Form.Control type="file" onChange={handleFileUpload} />
            </Form.Group>

            <Row className='mb-3'>
                <Form.Group as={Col} controlId='formSpiciness'>
                    <Form.Label>Spiciness</Form.Label>
                    <Form.Select
                        name='spiciness'
                        value={formData.spiciness}
                        onChange={handleInputChange}>
                        {
                            DISH_SPICYNESS.map(elm => <option>{elm}</option>)
                        }
                    </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId='formDishType'>
                    <Form.Label>Dish Type</Form.Label>
                    <Form.Select
                        name='type'
                        value={formData.type}
                        onChange={handleInputChange}>
                        {
                            DISH_TYPES.map(type => <option>{type}</option>)
                        }
                    </Form.Select>
                </Form.Group>
            </Row>

            <Form.Group className='mb-3' controlId='formVegetarian'>
                <Form.Check
                    type='switch'
                    id='vegetarian-switch'
                    label='Vegetarian'
                    name='vegetarian'
                    checked={formData.vegetarian}
                    onChange={handleSwitchChange('vegetarian')}
                />
            </Form.Group>

            <Form.Group className='mb-3' controlId='formVegan'>
                <Form.Check
                    type='switch'
                    id='vegan-switch'
                    label='Vegan'
                    name='vegan'
                    checked={formData.vegan}
                    onChange={handleSwitchChange('vegan')}
                />
            </Form.Group>

            <Button variant='primary' type='submit'>
                Submit
            </Button>

            <Toast
                show={showToast}
                onClose={() => setShowToast(false)}
                className="position-fixed top-80 end-0 m-3" // Adjusted position
                style={{ maxWidth: '350px' }}
            >
                <Toast.Header closeButton={false}>
                    <strong className="me-auto">Success</strong>
                </Toast.Header>
                <Toast.Body>Dish created successfully!</Toast.Body>
            </Toast>

        </Form>
    )
}

export default DishForm
