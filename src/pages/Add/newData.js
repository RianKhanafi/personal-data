import Input from "components/Input";
import Step from "components/step";
import Header from "parts/Header";
import React, { useContext, useEffect, useState } from "react";

import Datadiri from "./datadiri";
import Education from "./education";
import Experiance from "./experiance";
import Skills from "./skills";
import { UserDataContext } from "./context/userdata";
import { useUserData } from "./context/hook";
import { useParams, useHistory } from "react-router-dom";

export default function NewData() {
  const { id } = useParams();
  const history = useHistory();
  const { state, userdata } = useContext(UserDataContext);
  const [data, setData] = useState({
    datadiri: {},
    education: [{}],
    experiance: [{}],
    skills: [{}],
  });

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.length && id) {
      setData(
        users.find((user) => {
          return user?.datadiri?.id === Number(id);
        })
      );
    }
  }, [id]);

  const onChange = (index) => (e) => {
    const key = e.target.name;
    const value = e.target.value;

    if (index >= 0) {
      const arr = { ...data };
      arr[state?.activetab][index][key] = value;
      setData(arr);
    }

    if (!index && index !== 0) {
      setData({
        ...data,
        [state?.activetab]: {
          ...data[state?.activetab],
          [key]: value,
        },
      });
    }
  };

  const addNewLine = (e) => {
    const array = { ...data };
    array[state?.activetab].push({});
    setData(array);
  };

  const onDeleteItems = (index) => {
    const array = { ...data };
    array[state?.activetab].splice(index, 1);
    setData(array);
  };
  const renderForm = () => {
    const props = {
      data: data[state?.activetab] || {},
      onChange,
      addNewLine,
      onDeleteItems,
    };
    switch (state.activetab) {
      case "datadiri":
        return <Datadiri props={props} />;
      case "education":
        return <Education props={props} />;
      case "experiance":
        return <Experiance props={props} />;
      case "skills":
        return <Skills props={props} />;
    }
  };

  const nextStep = (e) => {
    if (e) {
      userdata?.setBulletData(e);
    } else userdata?.setActiveTab(state?.activetab);
  };

  const save = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (id) {
      const newUsers = users.filter(
        (user) => user?.datadiri?.id !== Number(id)
      );
      newUsers.push({
        ...data,
        datadiri: { ...data?.datadiri, id: users.length + 1 },
      });
      localStorage.setItem("users", JSON.stringify(newUsers));
    } else {
      users.push({
        ...data,
        datadiri: { ...data?.datadiri, id: users.length + 1 },
      });
      localStorage.setItem("users", JSON.stringify(users));
    }

    history.push("/");
  };

  return (
    <div>
      <Header />

      <section className="container mx-auto mt-28 xl:my-16 xl:mt-44 relative">
        <Step active={state?.activetab} onChangePoint={nextStep} />
        {renderForm()}

        <div className="flex w-full py-6 justify-end fixed right-20 bottom-0">
          <button
            className={[
              "shadow-lg bg-gray-300 hover:bg-gray-400 mr-4 text-white font-bold py-2 px-4 rounded mt-5 ",
              state?.activetab === "datadiri" ? "hidden" : "",
            ].join(" ")}
            onClick={() => userdata?.setPrevTab(state?.activetab)}
            disabled={state?.activetab === "datadiri"}
          >
            Previous
          </button>
          <button
            className="shadow-lg  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5"
            onClick={() => {
              state?.activetab === "skills" ? save() : nextStep();
            }}
          >
            {state?.activetab === "skills" ? "Save" : "Next"}
          </button>
        </div>
      </section>
    </div>
  );
}
