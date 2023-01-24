import axios from 'axios';

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: 'api_key en archivo api_key.txt',
        language: 'es-ES'
    }
});

export default movieDB;