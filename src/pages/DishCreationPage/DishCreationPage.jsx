import { Container } from "react-bootstrap";
import DishForm from "../../components/Forms/DishForm/DishForm";


const DishCreationPage = () => {
    return(
        <Container>
        <div className='DishForm'>
            <h1>Create a new Dish!</h1>
            <br />
            <DishForm/>
        </div>
        </Container>
    )
}

export default DishCreationPage 