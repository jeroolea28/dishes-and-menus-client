import axios from "axios";

class MenuServices {
    constructor() {
        this.axiosApp = axios.create({
            baseURL: import.meta.env.VITE_SERVER_URL
        });

        this.axiosApp.interceptors.request.use(config => {
            const storedToken = localStorage.getItem('authToken');
            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` };
            }
            return config;
        });
    }

    createMenu(menuData) {
        return this.axiosApp.post("/api/menu/create", menuData);
    }

    editMenu(menuId, menuData) {
        return this.axiosApp.put(`/api/menu/${menuId}/edit`, menuData);
    }

    getAllMenus() {
        return this.axiosApp.get("/api/menu");
    }

    getMenu(menuId) {
        return this.axiosApp.get(`/api/menu/${menuId}`);
    }

    deleteMenu(menuId) {
        return this.axiosApp.delete(`/api/menu/${menuId}`);
    }
}

export default new MenuServices();
