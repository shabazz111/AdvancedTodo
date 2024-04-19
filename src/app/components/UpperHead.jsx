import React, { useState } from "react";

const UpperHead = ({ addTodo }) => {
  const [input, setInput] = useState("");

  const todoActionHandler = () => {
    addTodo({ title: input, isCross: false, Id: Date.now() });
    setInput("");
  };

  return (
    <div className="flex w-1/2 justify-center mt-10 p-5 py-10 rounded-lg bg-white shadow-md border-2">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        className="border-2 rounded-md w-1/2 p-3 bg-gray-100 "
        placeholder="Write your todo here.."
      />
      <button
        onClick={todoActionHandler}
        className="px-10  cursor-pointer p-2 ml-10 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>
    </div>
  );
};

export default UpperHead;
