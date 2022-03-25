import React, { useState } from 'react'
import { FormRow, Alert } from '../components'
import { useAppContext } from '../context/appContext'
import { Link } from 'react-router-dom'
import { makePayment } from '../axios/apiCalls'

const initialState = {
    userId: '',
    loanId: '',
    loanAmount: '',
    outstandingAmount: '',
    amount: ''
}

function LoanPayment() {
    const { user, isLoading, displayAlert, showAlert } = useAppContext();
    const [ values, setValues ] = useState({...initialState, id: user.id});

    const handleSubmit = function(e) {
        e.preventDefault();

        if (!values.amount) {
            displayAlert();
        }

        const obj = { userId: values.userId, loanId: values.loanAmount, amount: values.amount };
        makePayment(obj);
    }

    const handleChange = function (e) {
        setValues({...values, [e.target.name]: e.target.value});
    }

  return (
      <form className="form" onSubmit={handleSubmit}>
        <h3>Loan Payment</h3>
        {showAlert && <Alert />}
        <span>Total Loan Amount: </span>
      <FormRow type="text" name="amount" value={values.amount} handleChange={handleChange} labelText="Payment amount: " />
      <button type="submit" disabled={isLoading}>Submit</button>
      <Link to='../../homepage'>Back to homepage</Link>
      </form>
  )
}

export default LoanPayment