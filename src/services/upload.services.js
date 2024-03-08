import axios from 'axios';

class UploadServices {
    constructor() {
        this.api = axios.create({
            baseURL: import.meta.env.VITE_SERVER_URL
        });
    }

    uploadImage(imageForm) {
        const authToken = localStorage.getItem('authToken');
        if (!authToken) {
            console.error('Authentication token is missing');
            return Promise.reject('Authentication token is missing');
        }

        return this.api.post('/api/uploader/image', imageForm, {
            headers: {
                Authorization: `Bearer ${authToken}`
            }
        });
    }
}

const uploadServices = new UploadServices();
export default uploadServices;
