import axios from 'axios';

const BASE_URL = 'http://localhost:3000/dsc/areas';

const getAreas = () => {
    return axios.get(BASE_URL).then((res) => res.data);
};

export default { 
    getAreas, 
}