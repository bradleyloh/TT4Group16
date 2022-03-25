import React, { useState, useEffect } from 'react';
import { FormRow, Alert } from '../components';
import { useAppContext } from '../context/appContext';
import { useNavigate } from 'react-router-dom';

const initialState = { 
  name: '',
  address: '',
  phone: '',
  password: '',
  hasAccount: true,
}

function Login() {
  const { isLoading, showAlert, setupUser, user } = useAppContext();
  const [values, setValues] = useState(initialState);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handleSubmit = function(e) {
    e.preventDefault();

    const user = { name: values.name, address: values.address, phone: values.phone, password: values.password };
    const setupType = values.hasAccount ? 'login' : 'create';
    setupUser(setupType, user);
  }

  const toggleMember = function() {
    setValues({...values, hasAccount:!values.hasAccount});
  }

  useEffect(function () {
    if (user) {
      setTimeout(function() {
        navigate('/homepage')
      }, 1000);
    }
  }, [ user, navigate ]);

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h3>{values.hasAccount ? 'Login' : 'Register'}</h3>
      {showAlert && <Alert />}
      {!values.hasAccount && (<FormRow type="text" name="name" value={values.name} handleChange={handleChange} labelText="Name" />)}
      {!values.hasAccount && (<FormRow type="text" name="address" value={values.address} handleChange={handleChange} labelText="Address" />)}
      <FormRow type="text" name="phone" value={values.phone} handleChange={handleChange} labelText="Phone number" />
      <FormRow type="password" name="password" value={values.password} handleChange={handleChange} labelText="Password" />
      <button type="submit" disabled={isLoading}>Submit</button>
      <div>
        {values.hasAccount ? 'Not a member yet?' : 'Already a member?'}
            <button type='button' onClick={toggleMember}>
              {values.hasAccount ? 'Register' : 'Login'}
            </button>
      </div>
      
    </form>
  );
}

export default Login