import Input from "components/Input";
import React, { useContext } from "react";

import { UserDataContext } from "./context/userdata";
import { useUserData } from "./context/hook";
import { ReactComponent as IconAdd } from "assets/icons/add.svg";

export default function Skills({
  props: {
    data,
    onChange = () => {},
    addNewLine = () => {},
    onDeleteItems = () => {},
  },
}) {
  const { state, userdata } = useContext(UserDataContext);
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
      <div className="bg-gray-100 mr-3 my-4  p-4 md:p-9 lg:p-9 xl:p-9 h-full">
        <div className="divide-y-2 divide-grey-800 divide-dashed  mb-4">
          <div className="pb-4  ">
            <span className="font-bold text-xl">keahlian</span>
          </div>
          <div></div>
        </div>
        {data.map((item, index) => (
          <div className="flex items-end mb-3" key={index}>
            <div className="w-7/12 pr-4">
              <Input
                label={index === 0 ? "Skill" : ""}
                name="skills"
                value={item["skills"]}
                placeholder="Skill"
                onChange={onChange(index)}
              />
            </div>
            <div className="w-5/12 pr-4">
              {/* <Input
                label="Tingkatan"
                name="tingkatan"
                onChange={onChange(index)}
                value={item["tingkatan"]}
              /> */}

              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                {index === 0 ? "Tingkatan" : ""}
              </label>
              <select
                className="border rounded text-xs lg:text-sm  xl:text-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="tingkatan"
                onChange={onChange(index)}
                value={item["skills"]?.tingkatan}
              >
                <option value="beginner">Beginner</option>
                <option value="middle">Middle</option>
                <option value="expert">Expert</option>
              </select>
            </div>
            <div className="w-2/12">
              <button
                className="px-1 xl:px-4 py-1  text-white text-xs lg:text-md xl:text-lg bg-red-400 rounded"
                onClick={() => onDeleteItems(index)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="h-full relative">
        <div
          className="bg-gray-100 mt-4 mr-4 xl:mr-0 xl:mt-0  xl:absolute w-full bottom-0 p-6  justify-center items-center  border-4  text-gray-500 hover:border-green-500 hover:text-green-500"
          onClick={addNewLine}
        >
          <div className="flex flex-col justify-center items-center">
            <div>
              <IconAdd fill="bg-gray-200" />
            </div>
            <div className="mt-4">
              <span className="font-semibold">Add Skills</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
