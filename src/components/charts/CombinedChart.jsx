import React from 'react';
import {
  ComposedChart, Line, Bar, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const data = [
  { month: 'Jan', users: 590, orders: 800, revenue: 1400 },
  { month: 'Feb', users: 868, orders: 967, revenue: 1506 },
  { month: 'Mar', users: 1397, orders: 1098, revenue: 989 },
  { month: 'Apr', users: 1480, orders: 1200, revenue: 1228 },
];

const CombinedChart = () => (
  <ResponsiveContainer width="100%" height={350}>
    <ComposedChart data={data}>
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Area type="monotone" dataKey="revenue" fill="#8884d8" stroke="#8884d8" />
      <Bar dataKey="orders" barSize={20} fill="#413ea0" />
      <Line type="monotone" dataKey="users" stroke="#ff7300" />
    </ComposedChart>
  </ResponsiveContainer>
);

export default CombinedChart;
