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
    <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
      <h2 className="text-xl font-semibold mb-4">⏱️ Pomodoro Timer</h2>
      <div className="text-5xl font-mono text-center mb-4">{formatTime(secondsLeft)}</div>
      <div className="flex justify-center gap-4">
        <button
          className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-xl"
          onClick={() => setIsRunning(true)}
        >
          Start
        </button>
        <button
          className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-xl"
          onClick={() => setIsRunning(false)}
        >
          Pause
        </button>
        <button
          className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-xl"
          onClick={() => {
            setIsRunning(false);
            setSecondsLeft(POMODORO_DURATION);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
