import React from "react";

export default function Step({ active, onChangePoint }) {
  const tabsSection = ["datadiri", "education", "experiance", "skills"];

  const indicator = (type) => {
    const index = tabsSection.indexOf(active);
    if (type === active) {
      return {
        style: "bg-gray-200",
        bg: "border-4 border-green-500 bg-white",
      };
    } else if (tabsSection.slice(0, index).find((elm) => elm === type)) {
      return {
        style: "bg-green-500",
        bg: "bg-green-500",
      };
    } else {
      return { style: "bg-gray-200", bg: "bg-gray-200" };
    }
  };

  return (
    <div className="">
      <div className="step relative xl:mx-36 xl:mb-16">
        <div className="indicator-layer  w-1/4 relative h-full">
          <div className="w-full">
            <div
              className={`flex items-center  mb-6 cursor-pointer`}
              onClick={() => onChangePoint("datadiri")}
            >
              <div
                className={["indicator", indicator("datadiri")?.bg].join(" ")}
              ></div>
              <div
                className={[
                  "indicator-line absolute",
                  indicator("datadiri")?.style,
                ].join(" ")}
              ></div>
            </div>
            <label className="text-gray-700 text-xs xl:text-base  text-center   text-center">
              Data Personal
            </label>
          </div>
        </div>
        <div className="indicator-layer  w-1/4 relative  h-full">
          <div className="w-full">
            <div
              className="flex items-center mb-6 cursor-pointer"
              onClick={() => onChangePoint("education")}
            >
              <div
                className={[
                  "flex indicator items-center",
                  indicator("education")?.bg,
                ].join(" ")}
              ></div>
              <div
                className={[
                  "indicator-line absolute",
                  indicator("education")?.style,
                ].join(" ")}
              ></div>
            </div>
            <label className="text-gray-700 text-xs xl:text-base  text-center  ">
              Riwayat Pendidikan
            </label>
          </div>
        </div>
        <div className="indicator-layer  w-1/4 relative  h-full">
          <div className="w-full">
            <div
              className="flex items-center  mb-6 cursor-pointer"
              onClick={() => onChangePoint("experiance")}
            >
              <div
                className={[
                  "flex indicator items-center",
                  indicator("experiance")?.bg,
                ].join(" ")}
              ></div>
              <div
                className={[
                  "indicator-line bg-gray-200 absolute",
                  indicator("experiance")?.style,
                ].join(" ")}
              ></div>
            </div>
            <label className="text-gray-700 text-xs xl:text-base  text-center  ">
              Pengalaman Kerja
            </label>
          </div>
        </div>
        <div className="indicator-layer  w-1/4 relative  h-full">
          <div className="w-full">
            <div
              className="flex items-center   mb-6 cursor-pointer"
              onClick={() => onChangePoint("skills")}
            >
              <div
                className={[
                  "flex indicator items-center ",
                  indicator("skills")?.bg,
                ].join(" ")}
              ></div>
            </div>
            <label className="text-gray-700 text-xs xl:text-base  text-center  ">
              keahlian
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
