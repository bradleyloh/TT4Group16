import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Login, Homepage, LoanCreate, LoanPayment } from './pages'
import ProtectedRoute from './pages/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/homepage" element={
        <ProtectedRoute>
          <Homepage />
        </ProtectedRoute>}></Route>
        <Route path="/loan/create" element={
        <ProtectedRoute>
          <LoanCreate />
        </ProtectedRoute>}></Route>
        <Route path="/loan/payment" element={
        <ProtectedRoute>
          <LoanPayment />
        </ProtectedRoute>}></Route>
        <Route path="*" element={<div>Error</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
