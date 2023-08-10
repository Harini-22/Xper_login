import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ErrorBoundary from './ErrorBoundary';
import Register from './Register';
import Login from './Login';
import Dashboard from './Dashboard';
import User from './User';
import Charts from './Charts';
import ProtectedRoute from './ProtectedRoute';
import Logout from './Logout';
import Todo from './Todo';



function App() {
  return (
    <div className="App">
      
        <Routes>
          <Route  path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route data-testid="dashboard-component" path='/dash' element={<ProtectedRoute><Dashboard/></ProtectedRoute>} />
          <ErrorBoundary>
            <Route data-testid="charts-container" path='/chart' element={<ProtectedRoute><Charts/></ProtectedRoute>} />
            </ErrorBoundary>
          <Route path="/User" element={<ProtectedRoute><User/></ProtectedRoute>} />
          <Route path="/todo" element={<ProtectedRoute><Todo/></ProtectedRoute>}/>
          <Route path="/logout" element={<ProtectedRoute><Logout/></ProtectedRoute>}/>
        {/* /* <ProtectedRoute>
          <Route path='/User' element={<User/>} />
          <Route path='/chart' element={<Charts/>} />
          <Route path="/dash" element={<Dashboard/>} />
       </ProtectedRoute> */
       /* <Route element={<ProtectedRoute />}>
          <Route path='/User' element={<User/>} />
          <Route path='/chart' element={<Charts/>} />
          <Route path="/dash" element={<Dashboard/>} />
       </Route> */ }
        </Routes>        
      
    </div>
  );
}

export default App;
