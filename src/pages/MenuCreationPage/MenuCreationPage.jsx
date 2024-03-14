import MenuForm from "../../components/Forms/MenuForm/MenuForm";
import { Container } from "react-bootstrap";
import backgroundImage from './../../assets/Menu-creation.png';

const MenuCreationPage = () => {
    return (
        <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', minHeight: '92.5vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Container >
                <div className='MenuForm' style={{ color: "white", textShadow: '1px 1px 1px black' }}>
                    <h1>Assemble your Dishes into a new Menu!</h1>
                    <br />
                    <MenuForm/>
                </div>
            </Container>
        </div>
    );
}

export default MenuCreationPage;
