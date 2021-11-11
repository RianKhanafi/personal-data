import Input from "components/Input";
import React from "react";

export default function Datadiri() {
  return (
    <div>
      <form>
        <div className="mb-4">
          <Input label="Nama Lengkap" />
        </div>
        <div className="mb-4">
          <Input label="No. Hp/Wa" />
        </div>
        <div className="mb-4">
          <Input label="Email" />
        </div>
        <div className="mb-4">
          <Input label="TTL" type="date" />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Address
          </label>
          <textarea className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
        </div>
      </form>
    </div>
  );
}
