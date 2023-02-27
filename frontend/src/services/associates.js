import axios from 'axios';

const BASE_URL = 'http://localhost:3000/dsc/associates'

const addAssociate = (newAssociate) => {
    return axios.post(BASE_URL, newAssociate).then(res => res.data);
};

export default {
    addAssociate,
}