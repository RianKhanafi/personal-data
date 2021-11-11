import Input from "components/Input";
import Step from "components/step";
import Header from "parts/Header";
import React, { useContext } from "react";
import { ReactComponent as IconAdd } from "assets/icons/add.svg";
import Datadiri from "./datadiri";
import Education from "./education";
import Experiance from "./experiance";
import Skills from "./skills";
import { UserDataContext } from "./context/userdata";
import { useUserData } from "./context/hook";

export default function NewData() {
  const { state, userdata } = useContext(UserDataContext);
  console.log("state =>", state);
  return (
    <div>
      <Header />

      <section className="container mx-auto my-16">
        <Step />

        <div className="flex p-8 my-12">
          <div className="w-1/2">
            <div className="bg-gray-100 m-4 p-9 h-full">
              {/* <Datadiri /> */}
              {/* <Education /> */}
              {/* <Experiance /> */}
              <Skills />
              {/* <p className="text-center text-gray-500 text-xs">
              &copy;2020 Acme Corp. All rights reserved.
            </p> */}
            </div>
          </div>
          <div className="w-1/2">
            <div
              className="bg-gray-100 h-full m-4 p-6 flex justify-center items-center  border-4  text-gray-500 hover:border-green-500 hover:text-green-500"
              onClick={() => userdata.addUserData()}
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
        </div>
      </section>
    </div>
  );
}
