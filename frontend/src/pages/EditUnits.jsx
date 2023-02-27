import { Link } from 'react-router-dom'
import { useState } from 'react';
import Textinput from '../components/Textinput';
import unitService from '../services/units';

const EditUnits = () => {
  const [unit, setUnit] = useState('');
  
  const onSubmit = (e) => {
    e.preventDefault();
    const newUnit = { name: unit };
    unitService.newUnit(newUnit).then(data => console.log(data));
    setUnit('');
  };
  
    return (
    <div>
        <form onSubmit={onSubmit}>
            <Textinput input='Unit' type='text' value={unit} onChange={(e) => setUnit(e.target.value)} />
            <input type="submit" value="Add Unit" />
        </form>
        <Link to="/"><button>Back</button></Link>
    </div>
  );
};

export default EditUnits;