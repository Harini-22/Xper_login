import React, { useState } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Nav from './Nav';

function User() {
  const [toggle, setToggle] = useState(true);
  const [searchTermName, setSearchTermName] = useState('');
  const [searchTermEmail, setSearchTermEmail] = useState('');
  const [searchTermAge, setSearchTermAge] = useState('');
  const [sortField, setSortField] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleSearchByName = (event) => {
    setSearchTermName(event.target.value);
  };

  const handleSearchByEmail = (event) => {
    setSearchTermEmail(event.target.value);
  };

  const handleSearchByAge = (event) => {
    setSearchTermAge(event.target.value);
  };

  const handleSort = (field) => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('asc');
    }
  };


  const userData = [
    { name: 'Harini', email: 'harini@example.com', age: 20 },
    { name: 'Shreenath', email: 'shree@example.com', age: 25 },
    { name: 'Santhosh', email: 'santha@example.com', age: 39 },
    { name: 'Raji', email: 'raji@example.com', age: 35 },
    { name: 'Krithika', email: 'krithi@example.com', age: 29 },
    { name: 'Sneha', email: 'sneha@example.com', age: 90 },
    { name: 'Akhila', email: 'akhila@example.com', age: 24 },
    { name: 'Shalini', email: 'shalini@example.com', age: 26 },
   
  ];

  const filteredAndSortedData = userData
  .filter((user) => {
    const nameMatch = user.name.toLowerCase().includes(searchTermName.toLowerCase());
    const emailMatch = user.email.toLowerCase().includes(searchTermEmail.toLowerCase());
    const ageMatch = user.age.toString().includes(searchTermAge);
    return nameMatch && emailMatch && ageMatch;
  })
  .sort((a, b) => {
    if (sortField === 'name') {
      return sortOrder === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
    } else if (sortField === 'email') {
      return sortOrder === 'asc' ? a.email.localeCompare(b.email) : b.email.localeCompare(a.email);
    } else if (sortField === 'age') {
      return sortOrder === 'asc' ? a.age - b.age : b.age - a.age;
    }
  });



  return (
    <>
      <div className='container-fluid bg-custom min-vh-100'>
        <div className='row'>
          <div className={`col-2 bg-white col overflow-auto ${toggle ? 'd-block' : 'd-none'}`} data-testid='sidebar'>
            {/* The 'd-block' class will show the Sidebar when toggle is true,
              'd-none' class will hide it when toggle is false. */}
            <Sidebar />
          </div>
          <div className='col overflow-auto'>
            <Nav Toggle={handleToggle} data-testid='nav'/>
            <div className='p-2'>
              <div className='p-1'>
                <div className='table-responsive'>
                  <table className='table caption-top rounded mt-2'>
                    <caption className='text-white fs-4 user'>Users</caption>
                    <thead>
                      <tr>
                      <th scope="col">
                      Name{' '}
                      <button className="btn btn-link" onClick={() => handleSort('name')}>
                        {sortOrder === 'asc' ? <i className="bi bi-sort-alpha-down"></i> : <i className="bi bi-sort-alpha-up"></i>}
                      </button>

                    </th>
                    <th scope="col">
                          Email{' '}
                          <button className="btn btn-link" onClick={() => handleSort('email')}>
                            {sortOrder === 'asc' ? <i className="bi bi-sort-alpha-down"></i> : <i className="bi bi-sort-alpha-up"></i>}
                          </button>
                        </th>
                        <th scope="col">
                          Age{' '}
                          <button className="btn btn-link" onClick={() => handleSort('age')}>
                            {sortOrder === 'asc' ? <i className="bi bi-sort-numeric-down"></i> : <i className="bi bi-sort-numeric-up"></i>}
                          </button>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                      <td >
                      <input
                        type="text"
                        className="form-control search-input"
                        placeholder="Search by name..."
                        value={searchTermName}
                        onChange={handleSearchByName}
                      />
                        </td>
                      
                        <td >
                      <input
                        type="text"
                        className="form-control search-input"
                        placeholder="Search by email..."
                        value={searchTermEmail}
                        onChange={handleSearchByEmail}
                      />
                    </td>
                        
                        <td >
                          <input
                            type="text"
                            className="form-control search-input"
                            placeholder="Search by age..."
                            value={searchTermAge}
                            onChange={handleSearchByAge}
                          />
                        </td>
                      </tr>
                       {filteredAndSortedData.map((user, index) => (
                    <tr key={index} data-testid="user-data-row">
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.age}</td>
                    </tr>
                  ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default User;
