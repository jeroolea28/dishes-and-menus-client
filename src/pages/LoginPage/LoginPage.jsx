import { Link } from "react-router-dom";
import LoginForm from "../../components/Forms/LoginForm/LoginForm";
import { Col, Container, Row } from "react-bootstrap";
import backgroundImage from "./../../assets/Dishes-login.png";
import invertedLogo from './../../assets/Dishes-logo-inverted.png';

const LoginPage = () => {
    return (
        <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
            <Container>
                <Row>
                    <Col md={{ span: 6 }}>
                        <img src={invertedLogo} alt="inverted-logo" style={{ width: '50%', height: 'auto' }} />
                    </Col>
                    <Col md={{ span: 6 }}>
                        <div className='LoginForm'>
                            <h1>Log In</h1>
                            <LoginForm/>
                            <br />
                            <p style={{color: 'white'}}>Don't have an account yet? <Link to={"/signup"} style={{ color: 'white' }}> Sign Up</Link></p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default LoginPage;
