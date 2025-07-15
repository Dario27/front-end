import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

type BarChartProps = {
  data: { name: string; value: number }[];
  width?: number | string;
  height?: number | string;
  colors?: string[];
};

export const BarChartComponent: React.FC<BarChartProps> = ({
  data,
  width = '100%',
  height = 400,
  colors = ['#8884d8', '#82ca9d'],
}) => {
  return (
    <div style={{ width, height }}>
      <ResponsiveContainer>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill={colors[0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};