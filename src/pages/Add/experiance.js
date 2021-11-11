import Input from "components/Input";
import React from "react";

export default function Experiance() {
  return (
    <form>
      <div className="mb-4">
        <Input label="Posisi" />
      </div>
      <div className="mb-4">
        <Input label="Nama Perusahaan" />
      </div>
      <div className="mb-4">
        <Input label="Duration" />
      </div>
      <div className="mb-4">
        <div className="flex items-end">
          <div>
            <Input label="Year" />
          </div>
          <div>
            <Input label="Month" />
          </div>
          <div className="pl-5">
            <div className="flex">
              <input type="checkbox" />
              <span className="ml-2">Sampai saat ini</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" for="">
            Informasi Tambahan
          </label>
          <textarea className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
        </div>
      </div>
    </form>
  );
}
