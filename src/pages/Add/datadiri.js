import Input from "components/Input";
import React, { useState } from "react";

export default function Datadiri({ props: { data, onChange = () => {} } }) {
  return (
    <div>
      <div className="bg-gray-100 mt-8 xl:  p-4 md:p-9 lg:p-9 xl:p-9">
        <div className="divide-y-1 divide-grey-800 divide-dashed  mb-4">
          <div className="pb-4  ">
            <span className="font-bold text-xl">Data Personal</span>
          </div>
          <div></div>
        </div>
        <div className="xl:flex">
          <div className="w-full xl:w-1/2 xl:pr-4">
            <div className="mb-4">
              <Input
                label="Nama Lengkap"
                onChange={onChange()}
                type="text"
                name="nama_lengkap"
                value={data["nama_lengkap"]}
              />
            </div>
            <div className="mb-4">
              <Input
                label="No. Hp/Wa"
                onChange={onChange()}
                name="no_phone"
                type="number"
                value={data["no_phone"]}
              />
            </div>
            <div className="mb-4">
              <Input
                label="Email"
                onChange={onChange()}
                name="email"
                value={data["email"]}
              />
            </div>
          </div>
          <div className="w-full xl:w-1/2 xl:pl-4">
            <div className="mb-4">
              <Input
                label="TTL"
                type="date"
                onChange={onChange()}
                name="ttl"
                value={data["ttl"]}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                Address
              </label>
              <textarea
                name="address"
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={onChange()}
                value={data["address"]}
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
