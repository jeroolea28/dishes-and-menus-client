import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useContext, useState } from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"    
import userServices from '../../../services/user.services'
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
        userServices
            .signup(formData)
            .then(() => {
            navigate("/login")
            })
            .catch((error) => {
                const errorDescription = error.response.data.message
                setErrorMessage(errorDescription)
            })
    }

  return (

        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="username" placeholder="Enter username" name='username' value={formData.username} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name='email' value={formData.email} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name='password' value={formData.password} onChange={handleChange}/>
        </Form.Group>
        <Button type="submit">
            Submit
        </Button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        </Form>

  )
}

export default SignupForm