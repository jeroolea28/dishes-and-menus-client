import { Link } from "react-router-dom";
import SignupForm from "../../components/Forms/SignupForm/SignupForm";

const SignupPage = () => {
    return (
        <div className='SignupForm'>
            <br/>
            <h1>Sign Up</h1>
            <SignupForm/>

            <p>Already have an account?</p>
            <Link to={"/login"}> Log In</Link>
        </div>
    )
}

export default SignupPage