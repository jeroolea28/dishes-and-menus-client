import { Routes, Route } from 'react-router-dom'
import LoginPage from './../pages/LoginPage/LoginPage'
import SignupPage from '../pages/SignupPage/SignupPage'
import HomePage from '../pages/HomePage/HomePage'
import DishCreationPage from '../pages/DishCreationPage/DishCreationPage'
import DishListPage from '../pages/DishListPage/DishListPage'
import DishDetailPage from '../pages/DishDetailsPage/DishDetailsPage'
import PrivateRoutes from './PrivateRoutes'


const AppRoutes = () => {
    
    return(
        <Routes>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/signup' element={<SignupPage/>}/>
            <Route path='/' element={<HomePage/>} />

            <Route element={<PrivateRoutes/>}>
                <Route path='/dish/create' element={<DishCreationPage/>}/>
                <Route path='/allDishes' element={<DishListPage/>}/>
                <Route path='/dish/:id' element={<DishDetailPage />} />
            </Route>
        </Routes>
    )
}

export default AppRoutes