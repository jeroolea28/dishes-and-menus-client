import React from 'react';
import { Container } from 'react-bootstrap';
import DishDetailCard from '../../components/DishDetailCard/DishDetailCard';
import backgroundImage from './../../assets/Dish-Details.png'

const DishDetailPage = () => {
    return (
        <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', minHeight: '92.5vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Container>
                <DishDetailCard />
            </Container>
        </div>
    );
}

export default DishDetailPage;




