import axios from 'axios';


const instance = axios.create ({
    baseURL:'http://localhost:3003',
    headers: {
        'Access-Control-Allow-Origin': 'http://localhost:3001',
        'Access-Control-Allow-Methods': 'POST,GET,PUT,DELETE,OPTIONS',
        
        'Content-type': 'application/json',
        'Access-Control-Allow-Headers':'X-PINGOTHER',
    }
});
export default instance;