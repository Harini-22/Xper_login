import React,{useState} from 'react'
import Sidebar from './Sidebar';
import Nav from './Nav';
import PieChart from './Chart/PieChart'
import LineChart from './Chart/LineChart'
import BarChart from './Chart/BarChart'
import AreaChart from './Chart/AreaChart'

function Charts() {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className='container-fluid bg-custom min-vh-100'>
      <div className='row'>
        <div className={`col-2 bg-white col overflow-auto ${toggle ? 'd-block' : 'd-none'}`}>
          {/* The 'd-block' class will show the Sidebar when toggle is true,
              'd-none' class will hide it when toggle is false. */}
          <Sidebar />
          
        </div>
        <div className='col overflow-auto'>
          <Nav Toggle={handleToggle} /> 
    <div data-testid="charts-container">
       <div className='p-3 '>
      <div className='container-fluid'>
      <div className='row px-3 py-4 '>
            <div className='col-12 col-md-5 p-3 me-3 bg-white mb-3 '>
              <b>LineChart</b>
                <LineChart/>
            </div>
            <div className='col-12 col-md-5 p-3 me-3 bg-white mb-3'>
              <b>PieChart</b>
                <PieChart/>
            </div>
            <div className='col-12 col-md-5 p-3 me-3 bg-white mb-3'>
                <b>BarChart</b>
                <BarChart/>
            </div>
            <div className='col-12 col-md-5 me-3 p-3 bg-white mb-3'>
                <b>AreaChart</b>
                <AreaChart/>
            </div>
        </div>
      </div>
      </div>
    </div></div></div></div>
  )
}

export default Charts
