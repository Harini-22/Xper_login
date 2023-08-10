import React from 'react'
import PieChart from './Chart/PieChart'
import LineChart from './Chart/LineChart'
import BarChart from './Chart/BarChart'


function Home() {
  return (
    
<div className='p-3'>
      <div className='container-fluid'>
        <div className='row'>
            <div className='col-12 col-sm-6 col-md-4 col-lg-3 p-3 '>
            <div className='d-flex justify-content-between px-2 py-4 align-items-center bg-white border-secondary shadow-sm'>
            <i className="bi bi-currency-dollar fs-1 text-success" data-testid='sales-icon'></i>
            <div id='sales'>
                <span data-testid='sales'>Sales</span>
                <h2>300</h2>
            </div>
            </div>
            </div>

            <div className='col-12 col-sm-6 col-md-4 col-lg-3 p-3 '>
            <div className='d-flex justify-content-between px-2 py-4 align-items-center bg-white border-secondary shadow-sm'>
            <i className="bi bi-truck fs-1 text-danger" aria-hidden="true"></i>
            <div data-testid='delivery'>
                <span>Delivery</span>
                <h2>200</h2>
            </div>
            </div>
            </div>

            <div className='col-12 col-sm-6 col-md-4 col-lg-3 p-3 '>
            <div className='d-flex justify-content-between px-2 py-4 align-items-center bg-white border-secondary shadow-sm'>
            <i className="bi bi-graph-up fs-1 text-primary" aria-hidden="true"></i>
            <div>
                <span>Increase</span>
                <h2>20%</h2>
            </div>
            </div>
            </div>

            <div className='col-12 col-sm-6 col-md-4 col-lg-3 p-3 '>
            <div className='d-flex justify-content-between px-2 py-4 align-items-center bg-white border-secondary shadow-sm'>
            <i className="bi bi-truck fs-1 text-warning" aria-hidden="true"></i>
            <div>
                <span data-testid='delivery'>Delivery</span>
                <h2>260</h2>
            </div>
            </div>
            </div>
        </div>

        <div className='row px-3 py-4 '>
            <div className='col-12 col-md-5 me-3 p-3 bg-white mb-3 ' data-testid='line-chart' id='line-chart'>
                <b>LineChart</b>
                <LineChart data-testid='line-chart'/>
            </div>
            <div className='col-12 col-md-5 me-3 p-3 bg-white mb-3' data-testid='pie-chart'>
                <b>PieChart</b>
                <PieChart data-testid='pie-chart'/>
            </div>
            <div className='col-12 col-md-5 me-3 p-3 bg-white mb-3' data-testid='bar-chart'>
                <b>BarChart</b>
                <BarChart/>
            </div>
        </div>
      </div>
</div>
  )
}

export default Home
