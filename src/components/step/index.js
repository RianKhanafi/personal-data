import Header from "parts/Header";
import React from "react";

export default function Step() {
  const color = {
    waiting: { style: "bg-gray-200" },
    ongoing: { style: "border-4 border-green-500 bg-white" },
    done: { style: "bg-green-500" },
  };
  return (
    <div className="step relative mx-36">
      <div className="indicator-layer  w-1/4 relative ">
        <div className="w-full">
          <div className={`flex items-center  mb-6`}>
            <div className={["indicator", color.done.style].join(" ")}></div>
            <div
              className={["indicator-line absolute", color.done.style].join(
                " "
              )}
            ></div>
          </div>
          <label className="text-gray-700">Data Personal</label>
        </div>
      </div>
      <div className="indicator-layer  w-1/4 relative ">
        <div className="w-full">
          <div className="flex items-center mb-6">
            <div
              className={[
                "flex indicator items-center",
                color.ongoing.style,
              ].join(" ")}
            ></div>
            <div
              className={["indicator-line absolute bg-gray-200"].join(" ")}
            ></div>
          </div>
          <label className="text-gray-700">Riwayat Pendidikan</label>
        </div>
      </div>
      <div className="indicator-layer  w-1/4 relative ">
        <div className="w-full">
          <div className="flex items-center  mb-6">
            <div
              className={[
                "flex indicator items-center",
                color.waiting.style,
              ].join(" ")}
            ></div>
            <div className="indicator-line bg-gray-200 absolute"></div>
          </div>
          <label className="text-gray-700">Pengalaman Kerja</label>
        </div>
      </div>
      <div className="indicator-layer  w-1/4 relative ">
        <div className="w-full">
          <div className="flex items-center  mb-6">
            <div
              className={[
                "flex indicator items-center",
                color.waiting.style,
              ].join(" ")}
            ></div>
            {/* <div className="indicator-line bg-gray-200 absolute"></div> */}
          </div>
          <label className="text-gray-700">keahlian</label>
        </div>
      </div>
    </div>
  );
}
