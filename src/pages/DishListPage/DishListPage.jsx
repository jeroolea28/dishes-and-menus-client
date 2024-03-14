import { Container } from "react-bootstrap"
import DishList from "../../components/DishList/DishList"
import backgroundImage from './../../assets/Dish-List.png'

const DishListPage = () => {
    return (
        <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Container>
                <DishList/>
            </Container>
        </div>
    );
}

export default DishListPage;