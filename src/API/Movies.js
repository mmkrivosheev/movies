import axios from 'axios';

export default  class Movies {
    static async getAll(page) {
        const response = await axios.get(`http://www.omdbapi.com/?apikey=9df3a0be&s=time&page=${page}`);
        return response;
    }

    static async getById(id) {
        const response = await axios.get(`https://www.omdbapi.com/?apikey=9df3a0be&i=${id}`);
        return response;
    }

}