import React from 'react'

function FormRow({name, value, type, labelText, handleChange, placeholder}) {
  return (
    <div className="form-row">
        <label className="form-label" htmlFor={name}>{labelText || name}</label>
        <input className="form-input" style={{margin: "0.5rem"}} name={name} type={type} value={value} placeholder={placeholder} onChange={handleChange}/>
    </div>
  )
}

export default FormRow