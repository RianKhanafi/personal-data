import Input from "components/Input";
import React, { useContext } from "react";
import { ReactComponent as IconAdd } from "assets/icons/add.svg";
import { UserDataContext } from "./context/userdata";

export default function Experiance({
  props: {
    data,
    onChange = () => {},
    addNewLine = () => {},
    onDeleteItems = () => {},
  },
}) {
  return (
    <div className="pt-4">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        {data.map((item, index) => (
          <div
            className="bg-gray-100 mr-3 my-4  p-4 md:p-9 lg:p-9 xl:p-9 h-full"
            key={index}
          >
            <div className="divide-y-2 divide-grey-800 divide-dashed  mb-4">
              <div className="pb-4  ">
                <div className="pb-4  flex justify-between">
                  <div>
                    <span className="font-bold text-sm xl:text-xl">
                      Pengalaman Kerja {index + 1}
                    </span>
                  </div>

                  <button
                    className="px-1 pyxl:px-4 py-1 text-sm xl:text-md text-white bg-red-400 rounded"
                    onClick={() => onDeleteItems(index)}
                  >
                    Delete
                  </button>
                </div>
              </div>
              <div></div>
            </div>
            <form>
              <div className="mb-4">
                <Input
                  label="Posisi"
                  name="position"
                  value={item["position"]}
                  onChange={onChange(index)}
                />
              </div>
              <div className="mb-4">
                <Input
                  label="Nama Perusahaan"
                  name="company_name"
                  onChange={onChange(index)}
                  value={item["company_name"]}
                />
              </div>
              <div className="mb-4">
                <Input
                  label="Duration"
                  value={item["duration"]}
                  name="duration"
                  onChange={onChange(index)}
                />
              </div>
              <div className="mb-4">
                <div className="flex items-end">
                  <div>
                    <Input
                      label="Year"
                      value={item["year"]}
                      name="year"
                      onChange={onChange(index)}
                    />
                  </div>
                  <div>
                    <Input
                      label="Month"
                      name="month"
                      value={item["month"]}
                      onChange={onChange(index)}
                    />
                  </div>
                  <div className="pl-5">
                    <div className="flex">
                      <input type="checkbox" value="current_work" />
                      <span className="ml-2 text-xs  xl:text-md">
                        Sampai saat ini
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    for=""
                  >
                    Informasi Tambahan
                  </label>
                  <textarea
                    className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="information"
                    value={item["information"]}
                    onChange={onChange(index)}
                  ></textarea>
                </div>
              </div>
            </form>
          </div>
        ))}

        <div
          className="bg-gray-100 ml-3 mr-4 xl:mr-0 h-full my-4 p-6 flex justify-center items-center  border-4  text-gray-500 hover:border-green-500 hover:text-green-500"
          onClick={() => addNewLine()}
        >
          <div className="flex flex-col justify-center items-center">
            <div>
              <IconAdd fill="bg-gray-200" />
            </div>
            <div className="mt-4">
              <span className="font-semibold">Add Pengalaman Kerja</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
