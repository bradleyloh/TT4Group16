import React, { useState, useEffect } from 'react'
import { useAppContext } from '../context/appContext';
import { getUserLoans } from '../axios/apiCalls';
import { Link } from 'react-router-dom';

function Homepage() {
  const { user, logoutUser } = useAppContext();
  console.log(user);
  const [ loans, setLoans ] = useState(null);
  const [ loanHistory, setLoanHistory ] = useState(null);
  console.log(loans);
  useEffect(function () {
    getUserLoans(setLoans, setLoanHistory, user.id);
    // eslint-disable-next-line
  }, []);

  return (
    <main>
      <div>
        Welcome back {user?.name}!
        <button type="button" onClick={logoutUser}>Logout</button>
      </div>
      <div className="account-balance">
        Account Balance: ${user?.balance}
      </div>
      <div>
        <table className="current-loan">
          <thead>
            <tr>
              <td>Loan Amount</td>
              <td>Outstanding Amount</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
            </tr>
          </thead>
          <tbody>
            {loans && loans.map(function(loan) {
                return <tr key={loan.id}>
                  <td>{loan.amount}</td>
                  <td>{loan.outstandingAmount}</td>
                  <td><Link to={`/loan/view?id=${loan.id}`}>View</Link></td>
                  <td><Link to={`/loan/payment?id=${loan.id}`}>Make payment</Link></td>
                </tr>
              })}
          </tbody>
        </table>
        <table className="loan-history">
          <thead>
            <tr>
              <td>Loan Amount</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            <tr>
            {loanHistory && loanHistory.map(function(loan) {
              return <tr key={loan.id}>
                <td>{loan.amount}</td>
                <td><Link to={`/loan/view?id=${loan.id}`}>View</Link></td>
              </tr>
            })}
        <tr><Link to='/loan/create'>Apply for New Loan</Link></tr>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  )
}

export default Homepage