import dotenv from 'dotenv';


dotenv.config();

export default {
    API_KEY: process.env.REACT_APP_API_KEY,
    BASE_URL: 'https://newsapi.org/v2/everything'
};
