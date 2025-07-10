import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Mon", focus: 3 },
  { name: "Tue", focus: 5 },
  { name: "Wed", focus: 2 },
  { name: "Thu", focus: 4 },
  { name: "Fri", focus: 1 },
];

export default function StatsDashboard() {
  return (
    <div className="bg-gradient-to-r from-pink-500 to-red-500 p-6 rounded-2xl shadow-xl hover:scale-[1.02] transition-transform duration-300">
      <h2 className="text-2xl font-semibold mb-4 text-white">📊 Focus Stats</h2>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data}>
          <XAxis dataKey="name" stroke="#fff" />
          <YAxis stroke="#fff" />
          <Tooltip contentStyle={{ backgroundColor: "#111", borderRadius: 8, color: "#fff" }} />
          <Bar dataKey="focus" fill="#facc15" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}