import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 font-sans">
      <h1 className="text-3xl font-bold mb-6">React Counter App</h1>
      <div className="bg-white p-6 rounded-2xl shadow-md text-center space-y-4">
        <p className="text-2xl">Count: {count}</p>
        <div className="space-x-4">
          <button
            onClick={() => setCount(count + 1)}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
          >
            Increment
          </button>
          <button
            onClick={() => setCount(count - 1)}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          >
            Decrement
          </button>
          <button
            onClick={() => setCount(0)}
            className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
