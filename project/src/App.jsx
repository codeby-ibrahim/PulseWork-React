import React from "react";
import PomodoroTimer from "./components/PomodoroTimer";
import TaskManager from "./components/TaskManager";
import StatsDashboard from "./components/StatsDashboard";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 font-sans">
      <h1 className="text-3xl font-bold text-center mb-6">🧠 FocusHub</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <PomodoroTimer />
        <TaskManager />
        <div className="md:col-span-2">
          <StatsDashboard />
        </div>
      </div>
    </div>
  );
}