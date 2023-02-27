import axios from 'axios';

const baseURL = 'http://localhost:3000/dsc/units'

const getUnits = () => {
    return axios.get(baseURL).then(res => res.data);
};

const newUnit = (newUnit) => {
    return axios.post(baseURL, newUnit).then(res => res.data);
}

export default { 
    getUnits,
    newUnit
};