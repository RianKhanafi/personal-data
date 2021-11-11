import Input from "components/Input";
import React from "react";

export default function Skills() {
  return (
    <div>
      <div>
        <div className="flex mb-3">
          <div className="w-3/4">
            <Input label="Skill" />
          </div>
          <div className="w-1/4">
            <Input label="Tingkatan" />
          </div>
        </div>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5">
          Tambah Skill
        </button>
      </div>
    </div>
  );
}
