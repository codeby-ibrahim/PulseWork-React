import React from "react";

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Mon", focus: 3 },
  { name: "Tue", focus: 5 },
  { name: "Wed", focus: 2 },
  { name: "Thu", focus: 4 },
  { name: "Fri", focus: 6 },
  { name: "Sat", focus: 1 },
  { name: "Sun", focus: 3 }
];

const FocusChart = () => {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="focus" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FocusChart;
