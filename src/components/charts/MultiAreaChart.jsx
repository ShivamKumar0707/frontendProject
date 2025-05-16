import React from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const data = [
  { month: 'Jan', income: 400, expense: 240 },
  { month: 'Feb', income: 300, expense: 139 },
  { month: 'Mar', income: 200, expense: 980 },
  { month: 'Apr', income: 278, expense: 390 },
];

const MultiAreaChart = () => (
  <ResponsiveContainer width="100%" height={300}>
    <AreaChart data={data}>
      <defs>
        <linearGradient id="income" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
        </linearGradient>
        <linearGradient id="expense" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
        </linearGradient>
      </defs>
      <XAxis dataKey="month" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend />
      <Area type="monotone" dataKey="income" stroke="#8884d8" fillOpacity={1} fill="url(#income)" />
      <Area type="monotone" dataKey="expense" stroke="#82ca9d" fillOpacity={1} fill="url(#expense)" />
    </AreaChart>
  </ResponsiveContainer>
);

export default MultiAreaChart;
