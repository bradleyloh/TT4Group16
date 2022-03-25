import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Login, Homepage } from './pages'
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
        <Route path="*" element={<div>Error</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
