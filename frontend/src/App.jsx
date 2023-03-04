import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Textinput from './components/Textinput';
import Dropdown from './components/Dropdown';
import unitService from './services/units';
import areaService from './services/areas';
import crewService from './services/crews';
import associateService from './services/associates';
import Tablerow from './components/Tablerow';

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
  const [associates, setAssociates] = useState([]);

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

  useEffect(() => {
    associateService.getAssociates().then(associates => setAssociates(associates));
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

    associateService.addAssociate(newAssociate).then(() => {
      associateService.getAssociates().then(updatedList => setAssociates(updatedList));
    });

    setFirstName('');
    setLastName('');
    setClockNo('');
    setUnitValue('');
    setAreaValue('');
    setCrewValue('');
  };

  const deleteAssociate = (id) => {
    associateService.deleteAssociate(id).then(updatedList => setAssociates(updatedList));
  };

  return (
    <div>
      <form onSubmit={submit}>
        <Textinput input='First Name' type='text' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        <Textinput input='Last Name' type='text' value={lastName} onChange={(e) => setLastName(e.target.value)} />
        <Textinput input='Clock Number' type='number' value={clockNo} onChange={(e) => setClockNo(e.target.value)} />
        <Dropdown input='Unit' value={unitValue} onChange={(e) => setUnitValue(e.target.value)} data={units}/>
        <Link to='/dsc/units/add'><button>Add Unit</button></Link>
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
        <Dropdown input="Crew" value={crewValue} onChange={(e) => setCrewValue(e.target.value)} data={crews}/>
        <input type="submit" value="Add Associate"/>
      </form>
      <table>
        <thead>
          <tr>
            <th>Clock No</th>
            <th>Name</th>
            <th>Area</th>
            <th>Crew</th>
          </tr>
        </thead>
        <tbody>
          {associates.map(associate => {
            return(
              <Tablerow key={associate._id} associate={associate} onClick={() => deleteAssociate(associate._id)}/>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default App