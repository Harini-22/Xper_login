import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'PageA',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'PageB',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'PageC',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'PageD',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'PageE',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'PageF',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'PageG',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

function Areachart() {
    return (
      <div className='bg-white border border-secondary' id='area-chart' data-testid='area-chart'>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart id="area-chart" data-testid='area-chart'
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
          
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#037c17" />
        </AreaChart>
      </ResponsiveContainer>
      </div>
    );
}

export default Areachart;