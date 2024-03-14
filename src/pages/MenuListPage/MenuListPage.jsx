import { Container } from "react-bootstrap"
import MenuList from "../../components/MenuList/MenuList"
import backgroundImage from './../../assets/Menu-List.png'

const MenuListPage = () => {
    return (
        <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', minHeight: '92 vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Container>
                <MenuList/>
            </Container>
        </div>
    );
}

export default MenuListPage;