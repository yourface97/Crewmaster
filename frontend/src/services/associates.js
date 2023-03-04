import axios from 'axios';

const BASE_URL = 'http://localhost:3000/dsc/associates'

const getAssociates = () => {
    return axios.get(BASE_URL).then(res => res.data);
}

const addAssociate = (newAssociate) => {
    return axios.post(BASE_URL, newAssociate).then(res => res.data);
};

const deleteAssociate = (id) => {
    return axios.delete(`${BASE_URL}/${id}`).then(res => res.data);
};

export default {
    getAssociates,
    addAssociate,
    deleteAssociate,
}