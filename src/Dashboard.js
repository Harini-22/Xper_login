import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Sidebar from './Sidebar';
import Nav from './Nav'
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import User from './User';
import Charts from './Charts';
import App from './App';

function Dashboard() {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (

    <div  data-testid='dashboard' className='container-fluid bg-custom min-vh-100 '>
      <div className='row'>
        <div className={`col-2 bg-white col overflow-auto ${toggle ? 'd-block' : 'd-none'}`}>
          {/* The 'd-block' class will show the Sidebar when toggle is true,
              'd-none' class will hide it when toggle is false. */}
          <Sidebar />
        </div>

        <div className='col overflow-auto'>
          <Nav Toggle={handleToggle} /> 
          <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/User' element={<User/>}></Route>
          <Route path='/chart' element={<Charts/>}></Route>
          </Routes>
          
         
        </div>
      </div>
    </div>
   
  );
}

export default Dashboard;
