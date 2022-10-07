import { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Stock from './pages/Stock';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/crypto" element={<Stock/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
