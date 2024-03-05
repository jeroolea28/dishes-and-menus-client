import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useContext, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";

const API_URL = "http://localhost:5005";


function LoginForm(props) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [errorMessage, setErrorMessage] = useState(undefined);

    const navigate = useNavigate();

    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);

    const { storeToken, authenticateUser } = useContext(AuthContext)


    const handleLoginSubmit = (e) => {

        e.preventDefault();

        const requestBody = { email, password };

        axios
            .post(`${API_URL}/api/auth/login`, requestBody)
            .then((response) => {
                storeToken(response.data.authToken)
                authenticateUser()
                navigate('/')
            })
            .catch((error) => {
                const errorDescription = error.response.data.message;
                setErrorMessage(errorDescription);
            })
    }



  return (
    <div>
        <br/>
        <h1>Log In</h1>
        <Form onSubmit={handleLoginSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name='email' value={email} onChange={handleEmail} />
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name='password' value={password} onChange={handlePassword}/>
        </Form.Group>
        <Button type="submit">
            Submit
        </Button>
        </Form>
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <p>Don't have an account yet?</p>
            <Link to={"/signup"}> Sign Up</Link>
    </div>
  )
}

export default LoginForm