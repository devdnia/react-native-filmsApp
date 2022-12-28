import axios from 'axios';

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: 'fea69a9e754c432ccfcd19325a63a24f',
        language: 'es-ES'
    }
});

export default movieDB;