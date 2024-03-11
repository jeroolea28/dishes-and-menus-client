import axios from "axios"

class DishServices {

    constructor() {
    
        this.axiosApp = axios.create({
            baseURL: import.meta.env.VITE_SERVER_URL
        })

        this.axiosApp.interceptors.request.use(config => {

            const storedToken = localStorage.getItem('authToken')

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }
    saveDish(dishData) {
        return this.axiosApp.post("/api/dish/create", dishData)
    }
    getAllDishes(userId){
        return this.axiosApp.get(`/api/dish/allDishes/${userId}`)
    }
    getSingleDish(dishId){
        return this.axiosApp.get(`/api/dish/${dishId}`)
    }
}

export default new DishServices()
