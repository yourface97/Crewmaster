const Textinput = ({ input, type, value, onChange }) => {
  return (
    <div>
        <label htmlFor={input}>{input}: </label>
        <input name={input} type={type} placeholder={`Enter ${input}`} onChange={onChange} value={value}></input>
    </div>
  )
}

export default Textinput