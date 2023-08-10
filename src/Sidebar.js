import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import 'bootstrap/dist/css/bootstrap.min.css';
import './sidebar.css';


function Sidebar() {
  return (
    <div className='d-flex flex-column min-vh-100 ' >
    <div className='m-2'>
      <span className='brand-name fs-4 text-decoration-none'>Xper</span>
    </div>
    <hr className='text-dark' />
    <div className='list-group list-group-flush flex-grow-1'>
      <Link to="/dash" className='list-group-item py-2'>
        <i className='bi bi-speedometer fs-4 me-2' data-testid='dashboard-icon'></i>
        <span className='fs-5 d-none d-md-inline'>Dashboard</span>
      </Link>
      <Link to="/User" className='list-group-item py-2'>
        <i className='bi bi-person-fill fs-4 me-2' data-testid='user-icon'></i>
        <span className='fs-5 d-none d-md-inline'>User</span>
      </Link>
      <Link to="/todo" className='list-group-item py-2'>
        <i className='bi bi-check-square-fill fs-4 me-2' data-testid='todo-icon'></i>
        <span className='fs-5 d-none d-md-inline'>Todo</span>
      </Link>
      <Link to="/chart" className='list-group-item py-2'>
        <i className='bi bi-pie-chart-fill fs-4 me-2' data-testid='charts-icon'></i>
        <span className='fs-5 d-none d-md-inline'>Charts</span>
      </Link>
      <Link to="/logout" className='list-group-item py-2'>
        <i className='bi bi-arrow-right-square-fill fs-4 me-2' data-testid='logout-icon'></i>
        <span className='fs-5 d-none d-md-inline'>Logout</span>
      </Link>
    </div>
  </div>
);
}

export default Sidebar;
