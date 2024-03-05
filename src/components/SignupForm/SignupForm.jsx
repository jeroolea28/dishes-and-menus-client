import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useContext, useState } from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/auth.context"
import './SignupForm.css'

const API_URL = "http://localhost:5005"


function SignupForm(props) {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        username: ""
    })
    const [errorMessage, setErrorMessage] = useState(undefined)
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios
            .post(`${API_URL}/api/auth/signup`, formData)
            .then(() => {
                navigate('/login')
            })
            .catch((error) => {
                const errorDescription = error.response.data.message
                setErrorMessage(errorDescription)
            })
    }



  return (
    <div className='SignupForm'>
        <br/>
        <h1>Sign Up</h1>
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="username" placeholder="Enter username" name='username' value={formData.username} onChange={handleChange} />
            <Form.Text className="text-muted">
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name='email' value={formData.email} onChange={handleChange} />
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name='password' value={formData.password} onChange={handleChange}/>
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