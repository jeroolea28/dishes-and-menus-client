import { Routes, Route } from 'react-router-dom'
import LoginPage from './../pages/LoginPage/LoginPage'
import SignupPage from '../pages/SignupPage/SignupPage'
import HomePage from '../pages/HomePage/HomePage'


const AppRoutes = () => {
    
    return(
        <Routes>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/signup' element={<SignupPage/>}/>
            <Route path='/' element={<HomePage/>} />
        </Routes>
    )
}

export default AppRoutes