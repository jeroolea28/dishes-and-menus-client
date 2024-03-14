import { Link } from "react-router-dom";
import SignupForm from "../../components/Forms/SignupForm/SignupForm";
import { Col, Container, Row } from "react-bootstrap";
import backgroundImage from './../../assets/Dishes-signup.png';
import logoImage from './../../assets/Dishes-logo-inverted.png';

const SignupPage = () => {
    return (
        <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
            <Container>
                <Row>
                    <Col md={{ span: 4}}>
                        <div className='SignupForm' style={{ color: "white", textShadow: '1px 1px 1px black' }}>
                            <h1>Sign Up</h1>
                            <SignupForm />
                            <br />
                            <p style={{ color: "white", textShadow: '1px 1px 1px black' }}>Already have an account? <Link to={"/login"} style={{ color: "white" }}>Log In</Link></p>
                        </div>
                    </Col>
                    <Col md={{ span: 4, offset: 3 }}>
                        <div className="d-flex justify-content-end">
                            <img src={logoImage} alt="logo" style={{ maxWidth: '75%', height: 'auto'}} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default SignupPage;
