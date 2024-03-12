import MenuForm from "../../components/Forms/MenuForm/MenuForm";
import { Container } from "react-bootstrap";


const MenuCreationPage = () => {
    return(
        <Container>
        <div className='MenuForm'>
            <h1>Assemble your Dishes into a new Menu!</h1>
            <br />
            <MenuForm/>
        </div>
        </Container>
    )
}

export default MenuCreationPage 