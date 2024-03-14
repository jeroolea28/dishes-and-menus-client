import { Container } from "react-bootstrap";
import DishForm from "../../components/Forms/DishForm/DishForm";
import backgroundImage from './../../assets/Dish-creation.png';

const DishCreationPage = () => {
    return (
        <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', minHeight: '92.5vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Container>
                <div className='DishForm' style={{ color: "white", textShadow: '1px 1px 1px black' }}>
                    <h1>Let your creativity flow! Create a new Dish!</h1>
                    <DishForm />
                </div>
            </Container>
        </div>
    );
}

export default DishCreationPage;
