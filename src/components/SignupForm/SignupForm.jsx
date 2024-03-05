import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useContext, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";

const API_URL = "http://localhost:5005";


function SignupForm(props) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    const [errorMessage, setErrorMessage] = useState(undefined);

    const navigate = useNavigate();

    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);
    const handleUsername = (e) => setUsername(e.target.value);



    const handleSignupSubmit = (e) => {

        e.preventDefault();

        const requestBody = { email, password, username };

        axios
            .post(`${API_URL}/api/auth/signup`, requestBody)
            .then(() => {
                navigate('/login');
            })
            .catch((error) => {
                const errorDescription = error.response.data.message;
                setErrorMessage(errorDescription);
            })
    }



  return (
    <div>
        <br/>
        <h1>Sign Up</h1>
        <Form onSubmit={handleSignupSubmit}>
        <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="username" placeholder="Enter username" name='username' value={username} onChange={handleUsername} />
            <Form.Text className="text-muted">
            </Form.Text>
        </Form.Group>

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

        <p>Already have an account?</p>
            <Link to={"/login"}> Log In</Link>
    </div>
  )
}

export default SignupForm