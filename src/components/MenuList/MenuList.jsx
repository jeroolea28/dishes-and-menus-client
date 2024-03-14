import { useContext, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import MenuCard from './../MenuCard/MenuCard';
import menuServices from './../../services/menu.services';
import { AuthContext } from './../../context/auth.context';

function MenuList() {
    const [menus, setMenus] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        if (user) {
            menuServices
                .getAllMenus()
                .then(response => {
                    setMenus(response.data);
                    setLoading(false);
                })
                .catch(error => {
                    console.error('Error fetching menus:', error);
                    setLoading(false);
                });
        }
    }, [user]);

    const handleDeleteMenu = (menuId) => {
        menuServices.deleteMenu(menuId)
            .then(() => {
                setMenus(prevMenus => prevMenus.filter(menu => menu._id !== menuId));
                console.log('Menu deleted successfully');
            })
            .catch(error => {
                console.error('Error deleting menu:', error);
            });
    };

    return (
        <div className='MenuList'>
            <h2 style={{color:'white', textShadow: '1px 1px 1px black'}}>Menus</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className='menu-cards'>
                    <Row>
                        {menus.map(menu => (
                            <Col md={{ span: 4 }} key={menu._id}>
                                <MenuCard
                                    id={menu._id}
                                    name={menu.name}
                                    description={menu.description}
                                    onDelete={() => handleDeleteMenu(menu._id)}
                                />
                                <br />
                            </Col>
                        ))}
                    </Row>
                </div>
            )}
        </div>
    );
}

export default MenuList;
