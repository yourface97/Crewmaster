import { useState, useEffect } from 'react';
import './App.css';
import Textinput from './components/Textinput';
import Dropdown from './components/Dropdown';
import unitService from './services/units';
import areaService from './services/areas';
import crewService from './services/crews';
import associateService from './services/associates';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [clockNo, setClockNo] = useState('');
  const [units, setUnits] = useState([]);
  const [unitValue, setUnitValue] = useState('');
  const [areas, setAreas] = useState([]);
  const [areaValue, setAreaValue] = useState('');
  const [crews, setCrews] = useState([]);
  const [crewValue, setCrewValue] = useState('');

  //Gets all unit data from server
  useEffect(() => {
    unitService.getUnits().then(units => setUnits(units));
  },[]);

  //Gets all area data from server
  useEffect(() => {
    areaService.getAreas().then(areas => setAreas(areas));
  },[]);

  //Gets all crew data from server
  useEffect(() => {
    crewService.getCrews().then(crews => setCrews(crews));
  },[]);

  //Adds new associate
  const submit = (e) => {
    e.preventDefault();
    const area = areas.filter(area => area.name === areaValue);
    const crew = crews.filter(crew => crew.name === crewValue);
    const newAssociate = {
      firstName,
      lastName,
      clockNo,
      area: area[0]._id,
      crew: crew[0]._id
    };

    associateService.addAssociate(newAssociate).then(associate => console.log(associate));

    setFirstName('');
    setLastName('');
    setClockNo('');
    setUnitValue('');
    setAreaValue('');
    setCrewValue('');
  };

  return (
    <div>
      <form onSubmit={submit}>
        <Textinput input='First Name' type='text' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        <Textinput input='Last Name' type='text' value={lastName} onChange={(e) => setLastName(e.target.value)} />
        <Textinput input='Clock Number' type='number' value={clockNo} onChange={(e) => setClockNo(e.target.value)} />
        <Dropdown input='unit' value={unitValue} onChange={(e) => setUnitValue(e.target.value)} data={units}/>
        <div>
          <label htmlFor="area">Area: </label>
          <select title="area" name="area" value={areaValue} onChange={(e) => setAreaValue(e.target.value)}>
            <option value=""></option>
            {unitValue.length > 0 && areas.filter(area => {
              return area.unit.name === unitValue
            }).map(area => {
                return <option key={area._id} value={area.name}>{area.name}</option>
            })}
          </select>
        </div>
        <Dropdown input="crew" value={crewValue} onChange={(e) => setCrewValue(e.target.value)} data={crews}/>
        <input type="submit" value="Submit"/>
      </form>
      <div>
      
      </div>
    </div>
  )
}

export default App