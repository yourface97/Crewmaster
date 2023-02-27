const Dropdown = ({ input, value, onChange, data }) => {
    return (
    <div>
        <label htmlFor={input}>{input}: </label>
        <select title={input} name={input} value={value} onChange={onChange}>
            <option value=""></option>
            {data.map(data => {
                return <option key={data._id} value={data.name}>{data.name}</option>
            })}
        </select>
    </div>
  )
}

export default Dropdown