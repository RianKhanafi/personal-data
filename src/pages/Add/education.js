import Input from "components/Input";
import React from "react";

export default function Education() {
  return (
    <form>
      <div className="mb-4">
        <Input label="Universitas/Sekolah" />
      </div>
      <div className="mb-4">
        <Input label="Tanggal Lulus" />
      </div>
      <div className="mb-4">
        <Input label="Jurusan" />
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
