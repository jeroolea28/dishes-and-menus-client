import { Container } from 'react-bootstrap';
import './HomePage.css';
import kitchenVideo from './../../assets/Dishes-and-Menus.mp4';

const HomePage = () => {
    return (
        <Container fluid className="homePage">
            <video autoPlay loop muted className="background-video">
                <source src={kitchenVideo} type="video/mp4" />
            </video>
        </Container>
    );
}

export default HomePage;
