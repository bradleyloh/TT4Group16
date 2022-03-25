import React, { useState } from 'react';
import { FormRow } from '../components';

const initialState = { 
  name: '',
  address: '',
  phone: '',
  password: '',
  hasAccount: true
}

function Login() {

  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handleSubmit = function(e) {
    e.preventDefault();
  }

  const toggleMember = function() {
    setValues({...values, hasAccount:!values.hasAccount});
}

  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h3>{values.hasAccount ? 'Login' : 'Register'}</h3>
      {/*showAlert && <Alert />*/}
      {!values.hasAccount && (<FormRow handleChange={handleChange} type="text" name="name" value={values.email} labelText="Name"/>)}
      {!values.hasAccount && (<FormRow handleChange={handleChange} type="text" name="address" value={values.password} labelText="Address"/>)}
      <FormRow handleChange={handleChange} type="text" name="phone" value={values.email} labelText="Phone number"/>
      <FormRow handleChange={handleChange} type="password" name="password" value={values.password} labelText="Password"/>
      
      <button type="button">Submit</button>
      <div>
        {values.hasAccount ? 'Not a member yet?' : 'Already a member?'}
            <button type='button' onClick={toggleMember} className='member-btn'>
              {values.hasAccount ? 'Register' : 'Login'}
            </button>
      </div>
      
    </form>
  );
}

export default Login