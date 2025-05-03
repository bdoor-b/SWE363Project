import axios from 'axios';

const instance = axios.create({
  baseURL: "http://localhost:5001", // the backend URL
  headers: {
    'Content-Type': 'application/json',
  },

  baseURL: process.env.REACT_APP_API_URL,
});




export default instance;
