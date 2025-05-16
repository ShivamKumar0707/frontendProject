import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const data = [
  { name: 'Jan', uv: 400, pv: 240, amt: 240 },
  { name: 'Feb', uv: 300, pv: 139, amt: 221 },
  { name: 'Mar', uv: 200, pv: 980, amt: 229 },
  { name: 'Apr', uv: 278, pv: 390, amt: 200 },
];

const MultiLineChart = () => (
  <ResponsiveContainer width="100%" height={300}>
    <LineChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
    </LineChart>
  </ResponsiveContainer>
);

export default MultiLineChart;
