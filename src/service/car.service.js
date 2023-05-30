import axios from "axios"

export const carService = {
    async getAll() {
        const response = await axios.get('http://localhost:3000/cars/')
        return response.data
    },
}

// json-server --watch db.json