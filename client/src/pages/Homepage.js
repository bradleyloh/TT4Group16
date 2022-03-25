import React from 'react'

function Homepage() {


  const handleChange = function () {

  }

  return (
    <main>
      <div>
        Welcome back!
        <button type="button">Logout</button>
      </div>
      <div className="account-balance">
        Account Balance:
      </div>
      <div>
        <table className="current-loan">
          <thead>
            <tr>
              <td>Loan Amount</td>
              <td>Outstanding Amount</td>
              <td>View</td>
              <td>Make payment</td>
            </tr>
            <tr>
            </tr>
          </thead>
          <tbody>
            
          </tbody>
        </table>
        <table className="loan-history">
          <thead>
            <tr>
              <td>Loan Amount</td>
              <td>View</td>
            </tr>
          </thead>
          <tbody>
            <tr>

            </tr>
          </tbody>
        </table>
      </div>
    </main>
  )
}

export default Homepage