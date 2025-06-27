import './App.css'
import React from 'react';
import { Routes, Route } from 'react-router-dom'
import LoginUser from './Components/Login'
import RegisterUser from './Components/Register'
import Home from './Components/Home';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element = {<Home/>}></Route>
        <Route path='/login' element={<LoginUser/>}></Route>;
        <Route path='/register' element={<RegisterUser/>}></Route>;
      </Routes>
    </>
  )
}

export default App;
