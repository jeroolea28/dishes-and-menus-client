import { Routes, Route } from 'react-router-dom'
import LoginPage from './../pages/LoginPage/LoginPage'
import SignupPage from '../pages/SignupPage/SignupPage'


const AppRoutes = () => {
    
    return(
        <Routes>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/signup' element={<SignupPage/>}/>
        </Routes>
    )
}

export default AppRoutes