import React, { useState, useEffect } from "react";

const POMODORO_DURATION = 25 * 60; // 25 minutes

export default function PomodoroTimer() {
  const [secondsLeft, setSecondsLeft] = useState(POMODORO_DURATION);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    } else if (!isRunning && secondsLeft !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, secondsLeft]);

  const formatTime = (s) => `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 rounded-2xl shadow-xl hover:scale-[1.02] transition-transform duration-300">
      <h2 className="text-2xl font-semibold mb-4 text-white">⏱️ Pomodoro Timer</h2>
      <div className="text-6xl font-mono text-center mb-6 tracking-wider">
        {formatTime(secondsLeft)}
      </div>
      <div className="flex justify-center gap-4">
        <button className="bg-green-500 hover:bg-green-600 px-5 py-2 rounded-xl shadow-md transition">Start</button>
        <button className="bg-yellow-500 hover:bg-yellow-600 px-5 py-2 rounded-xl shadow-md transition">Pause</button>
        <button className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-xl shadow-md transition">Reset</button>
      </div>
    </div>
  );
}