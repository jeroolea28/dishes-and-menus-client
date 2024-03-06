import axios from "axios"

class UserServices {

    constructor() {

        this.axiosApp = axios.create({
            baseURL: import.meta.env.VITE_SERVER_URL
        })

        this.axiosApp.interceptors.request.use(config => {

            const storedToken = localStorage.getItem('authToken');

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` };
            }

            return config
        })
    }

    login(formData) {
        return this.axiosApp.post("/api/auth/login", formData);
    }

    signup(formData) {
        return this.axiosApp.post("/api/auth/signup", formData);
      }

    checkAuth(){
        return this.axiosApp.get('/api/auth/verify')
    }
}

export default new UserServices()