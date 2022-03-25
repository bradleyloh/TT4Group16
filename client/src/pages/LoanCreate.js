import React, { useState } from 'react'
import { FormRow, Alert } from '../components'
import { useAppContext } from '../context/appContext'
import { Link } from 'react-router-dom'
import { createLoan } from '../axios/apiCalls'

const initialState = {
    id: '',
    amount: ''
}

function LoanCreate() {
    const { user, isLoading, displayAlert, showAlert } = useAppContext();
    const [ values, setValues ] = useState({...initialState, id: user.id});

    const handleSubmit = function(e) {
        e.preventDefault();
    
        if (!values.amount) {
            displayAlert();
        }

        const obj = { id: values.id, amount: values.amount };
        createLoan(obj);
      }

    const handleChange = function (e) {
        setValues({...values, [e.target.name]: e.target.value});
    }

  return (
      <form className="form" onSubmit={handleSubmit}>
        <h3>New Loan</h3>
        {showAlert && <Alert />}
        <FormRow type="text" name="amount" value={values.amount} handleChange={handleChange} labelText="Loan amount" />
        <button type="submit" disabled={isLoading}>Submit</button>
        <Link to='../../homepage'>Back to homepage</Link>
      </form>
    

  )
}

export default LoanCreate