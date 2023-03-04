const Tablerow = ({ associate, onClick}) => {
  return (
    <tr>
        <td>{associate.clockNo}</td>
        <td>{associate.firstName} {associate.lastName}</td>
        <td>{associate.area.name}</td>
        <td>{associate.crew.name}</td>
        <td><button onClick={onClick}>Delete</button></td>
    </tr>
  )
}

export default Tablerow