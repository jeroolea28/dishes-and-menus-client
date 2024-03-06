import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './DishForm.css';

function DishForm() {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    ingredients: [],
    spiciness: 'Not Spicy',
    vegetarian: false,
    vegan: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

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
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleIngredientRemove = (index) => {
    setFormData((prevFormData) => {
      const updatedIngredients = [...prevFormData.ingredients];
      updatedIngredients.splice(index, 1);
      return { ...prevFormData, ingredients: updatedIngredients };
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className='DishForm'>
      <h1>Create a new Dish!</h1>
      <br />
      <Form onSubmit={handleFormSubmit}>
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
            rows={5}
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
                    <div key={index} className="mb-2">
                        <span>{ingredient.charAt(0).toUpperCase() + ingredient.slice(1)}</span>
                        <Button
                            variant="danger"
                            size="sm"
                            className="ms-2"
                            onClick={() => handleIngredientRemove(index)}
                        >
                            Remove
                        </Button>
                    </div>
                ))}
                </div>
                <Form.Control
                    type='text'
                    placeholder='Add ingredient'
                    name='newIngredient'
                    value={formData.newIngredient || ''}
                    onChange={handleIngredientInputChange}
                />
                </Col>
                <Col xs={3}>
                <Button onClick={handleIngredientAdd}>Add</Button>
                </Col>
            </Row>
        </Form.Group>

        <Row className='mb-3'>
          <Form.Group as={Col} controlId='formGridAddress2'>
            <Form.Label>Spiciness</Form.Label>
            <Form.Select
              name='spiciness'
              value={formData.spiciness}
              onChange={handleInputChange}
            >
              <option>Not Spicy</option>
              <option>Mild</option>
              <option>Spicy</option>
              <option>Very Spicy</option>
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
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formVegan'>
          <Form.Check
            type='switch'
            id='vegan-switch'
            label='Vegan'
            name='vegan'
            checked={formData.vegan}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default DishForm;
