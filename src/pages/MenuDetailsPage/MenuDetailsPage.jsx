import React from 'react';
import { Container } from 'react-bootstrap';
import MenuDetailCard from '../../components/MenuDetailCard/MenuDetailCard';
import backgroundImage from './../../assets/Menu-Details.png'

const MenuDetailPage = () => {
    return (
        <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', minHeight: '92.5vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Container>
                <MenuDetailCard />
            </Container>
        </div>
    );
}

export default MenuDetailPage;