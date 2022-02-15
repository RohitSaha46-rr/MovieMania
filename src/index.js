import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import About from './About';

ReactDOM.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App/>}></Route>
    <Route path='/about' element={<About/>}></Route>
  </Routes>
    
  </BrowserRouter>,
  document.getElementById('root')
);


