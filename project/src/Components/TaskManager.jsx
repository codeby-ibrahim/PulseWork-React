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
    <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
      <h2 className="text-xl font-semibold mb-4">📝 Task Manager</h2>
      <div className="flex gap-2 mb-4">
        <input
          className="flex-1 p-2 rounded-xl text-black"
          placeholder="New task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className="bg-blue-500 px-4 py-2 rounded-xl" onClick={addTask}>
          Add
        </button>
      </div>
      <ul className="space-y-2">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="bg-gray-700 px-4 py-2 rounded-xl flex justify-between items-center"
          >
            <span>{task}</span>
            <button
              className="text-red-400 hover:text-red-600"
              onClick={() => deleteTask(index)}
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}