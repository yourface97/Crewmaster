import axios from 'axios'

const BASE_URL = 'http://localhost:3000/dsc/crews';

const getCrews = () => {
    return axios.get(BASE_URL).then((res) => res.data);
};

export default {
    getCrews,
}