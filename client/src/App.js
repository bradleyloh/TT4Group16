import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Login, Homepage } from './pages'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/homepage" element={<Homepage />}></Route>
        <Route path="*" element={<div>Error</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
