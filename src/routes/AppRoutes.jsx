import { Routes, Route } from 'react-router-dom'
import LoginPage from './../pages/LoginPage/LoginPage'
import SignupPage from '../pages/SignupPage/SignupPage'
import HomePage from '../pages/HomePage/HomePage'
import DishCreationPage from '../pages/DishCreationPage/DishCreationPage'
import DishListPage from '../pages/DishListPage/DishListPage'


const AppRoutes = () => {
    
    return(
        <Routes>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/signup' element={<SignupPage/>}/>
            <Route path='/' element={<HomePage/>} />
            <Route path='/dish/create' element={<DishCreationPage/>}/>
            <Route path='/allDishes' element={<DishListPage/>}/>
        </Routes>
    )
}

export default AppRoutes