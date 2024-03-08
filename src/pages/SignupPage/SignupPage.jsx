import { Link } from "react-router-dom";
import SignupForm from "../../components/Forms/SignupForm/SignupForm";
import { Container } from "react-bootstrap";

const SignupPage = () => {
    return (
        <Container>
        <div className='SignupForm'>
            <br/>
            <h1>Sign Up</h1>
            <SignupForm/>

            <p>Already have an account?</p>
            <Link to={"/login"}> Log In</Link>
        </div>
        </Container>
    )
}

export default SignupPage