import React from "react";

export default function Input({
  label,
  placeholder,
  type = "text",
  onChange = () => {},
  value,
  name,
  error,
}) {
  return (
    <div>
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="">
        {label}
      </label>
      <input
        name={name}
        className="text-sm xl:text-md border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type={type}
        placeholder={placeholder}
        value={value || ""}
        type={type}
        onChange={onChange}
      />
      {error ? <p className="text-red-500 text-xs italic">{error}</p> : null}
    </div>
  );
}
