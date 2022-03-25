import React from 'react'

function FormRow({name, value, type, labelText, handleChange, placeholder, checked}) {
  return (
    <div className="form-row">
        <label className="form-label" htmlFor={name}>{labelText || name}</label>
        <input className="form-input" type={type} value={value} placeholder={placeholder} onChange={handleChange} defaultChecked={checked}/>
    </div>
  )
}

export default FormRow