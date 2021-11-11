import { ReactComponent as IconAdd } from "assets/icons/add.svg";
import Input from "components/Input";
import React from "react";

export default function Education({
  props: {
    data,
    onChange = () => {},
    addNewLine = () => {},
    onDeleteItems = () => {},
  },
}) {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
      {data.map((item, index) => (
        <div
          className="bg-gray-100 xl:mr-3 my-4  p-4 md:p-9 lg:p-9 xl:p-9 h-full"
          key={index}
        >
          <div className="divide-y-2 divide-grey-800 divide-dashed  mb-4">
            <div className="pb-4  flex justify-between">
              <div>
                <span className="font-bold text-sm xl:text-xl">
                  Riwayat Pendidikan {index + 1}
                </span>
              </div>

              <button
                className="px-1 pyxl:px-4 py-1 text-sm xl:text-md text-white bg-red-400 rounded"
                onClick={() => onDeleteItems(index)}
              >
                Delete
              </button>
            </div>
            <div></div>
          </div>
          <form>
            <div>
              <div className="mb-4">
                <Input
                  label="Universitas/Sekolah"
                  name="universitas"
                  value={item["universitas"]}
                  onChange={onChange(index)}
                />
              </div>
              <div className="mb-4">
                <Input
                  label="Tanggal Kelulusan"
                  name="graduate_date"
                  value={item["graduate_date"]}
                  onChange={onChange(index)}
                  type="date"
                />
              </div>
              <div className="mb-4">
                <Input
                  label="Jurusan"
                  name="major"
                  value={item["major"]}
                  onChange={onChange(index)}
                />
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
                    value={item["information"]}
                    onChange={onChange(index)}
                    className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="information"
                  ></textarea>
                </div>
              </div>
            </div>
          </form>
        </div>
      ))}

      <div
        className="bg-gray-100 mr-4 ml-3 xl:mr-0 h-full my-4 p-6 flex justify-center items-center  border-4  text-gray-500 hover:border-green-500 hover:text-green-500"
        onClick={addNewLine}
      >
        <div className="flex flex-col justify-center items-center">
          <div>
            <IconAdd fill="bg-gray-200" />
          </div>
          <div className="mt-4">
            <span className="font-semibold">Add Riwayat Pendidikan</span>
          </div>
        </div>
      </div>
    </div>
  );
}
