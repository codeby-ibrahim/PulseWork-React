import React, { useState } from "react";

export default function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 rounded-2xl shadow-xl hover:scale-[1.02] transition-transform duration-300">
      <h2 className="text-2xl font-semibold mb-4 text-white">📝 Task Manager</h2>
      <div className="flex gap-2 mb-4">
        <input
          className="flex-1 p-2 rounded-xl text-gray-900 outline-none"
          placeholder="New task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className="bg-white text-blue-700 font-bold px-4 py-2 rounded-xl hover:bg-blue-100 transition" onClick={addTask}>
          Add
        </button>
      </div>
      <ul className="space-y-2">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="bg-blue-500/80 px-4 py-2 rounded-xl flex justify-between items-center hover:bg-blue-400/80 transition"
          >
            <span className="text-white font-medium">{task}</span>
            <button className="text-white hover:text-red-300" onClick={() => deleteTask(index)}>
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}