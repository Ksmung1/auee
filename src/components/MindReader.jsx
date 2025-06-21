import React, { useState } from "react";

const MindReader = () => {
  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);
  const [result, setResult] = useState("");

  const analyzeMind = () => {
    if (!input.trim()) return;

    setThinking(true);
    setResult("");

    setTimeout(() => {
      setThinking(false);
      setResult(`I read your mind and you are thinking about: "${input}" 🤯`);
    }, 2000); // 2 seconds thinking delay
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") analyzeMind();
  };

  return (
    <div className="p-4 border rounded max-w-md mx-auto">
      <h6 className="mb-2 font-semibold">I can also read your mind</h6>
      <input
        type="text"
        placeholder="What are you thinking about?"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        className="w-full p-2 border rounded"
      />
      <button
        onClick={analyzeMind}
        disabled={thinking}
        className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 disabled:opacity-50"
      >
        {thinking ? "Thinking..." : "Read my mind"}
      </button>

      {result && (
        <p className="mt-4 text-lg font-semibold text-center text-indigo-800">{result}</p>
      )}
    </div>
  );
};

export default MindReader;
