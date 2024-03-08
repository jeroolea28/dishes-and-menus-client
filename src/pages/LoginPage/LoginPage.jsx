import { Link } from "react-router-dom";
import LoginForm from "../../components/Forms/LoginForm/LoginForm";
import { Container } from "react-bootstrap";

const LoginPage = () => {
    return (
        <Container>
        <div className='LoginForm'>

            <br />

            <h1>Log In</h1>

            <LoginForm/>
            
            <p>Don't have an account yet?</p>

            <Link to={"/signup"}> Sign Up</Link>
        </div>
        </Container>
    )
}

export default LoginPage