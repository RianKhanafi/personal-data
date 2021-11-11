import React from "react";

export default function Input({ label, placeholder, type = "text" }) {
  return (
    <div>
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        for="username"
      >
        {label}
      </label>
      <input
        className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="username"
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}
