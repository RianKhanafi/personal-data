import Step from "components/step";
import Header from "parts/Header";
import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { UserDataContext } from "./context/userdata";
import Datadiri from "./datadiri";
import Education from "./education";
import Experiance from "./experiance";
import Skills from "./skills";

const initialData = {
  datadiri: {
    address: null,
    email: null,
    nama_lengkap: null,
    no_phone: null,
    ttl: null,
  },
  education: [
    {
      universitas: null,
      graduate_date: null,
      major: null,
    },
  ],

  experiance: [
    {
      position: null,
      company_name: null,
      duration: null,
    },
  ],
  skills: [{ skills: null, tingkatan: null }],
};
export default function NewData() {
  const { id } = useParams();
  const history = useHistory();
  const { state, userdata } = useContext(UserDataContext);
  const [data, setData] = useState({ ...initialData });

  const [error, setError] = useState({
    ...initialData,
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
    array[state?.activetab].push(
      state?.activetab === "datadiri"
        ? initialData[state?.activetab]
        : initialData[state?.activetab]?.[0]
    );
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
      error: error[state?.activetab] || {},
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

  const validate = () => {
    let errorArr = {
      [state?.activetab]: state?.activetab === "datadiri" ? {} : [],
    };

    // console
    switch (state?.activetab) {
      case "datadiri":
        Object.keys(data[state?.activetab]).forEach((key) => {
          if (!data[state?.activetab][key]) {
            errorArr[state?.activetab][key] = `Kolom ${key} wajib diisi!`;
          } else {
            errorArr[state?.activetab][key] = null;
          }
        });
        break;
      default:
        data[state?.activetab].forEach((key, index) => {
          let err = {};
          Object.keys(key).forEach((field) => {
            if (!key[field]) {
              err[field] = `Kolom ${field} wajib diisi!`;
            } else {
              err[field] = null;
            }
          });
          if (Object.keys(err).length) {
            errorArr[state?.activetab]?.push(err);
          } else errorArr[state?.activetab] = [];
        });
    }
    setError(errorArr);

    if (state?.activetab === "datadiri") {
      return {
        next:
          Object.values(errorArr[state?.activetab]).find(
            (elm) => elm !== null
          ) === undefined,
      };
    } else {
      return {
        next:
          errorArr[state?.activetab].find((elm) => {
            return Object.values(elm).find((elm) => elm !== null);
          }) === undefined,
      };
    }
  };

  const nextStep = (e) => {
    const validasi = validate();
    if (validasi?.next) {
      if (e) {
        userdata?.setBulletData(e);
      } else userdata?.setActiveTab(state?.activetab);
    }
  };

  const save = () => {
    const validasi = validate();

    if (validasi?.next) {
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
      userdata?.setBulletData("datadiri");
      setData({ ...initialData });
      history.push("/");
    }
  };

  return (
    <div>
      <Header />

      <section className="container mx-auto mt-28 xl:my-16 xl:mt-44 relative">
        <Step active={state?.activetab} onChangePoint={nextStep} />
        <div className="mb-24 xl:mb-0 lg:mb-0">{renderForm()}</div>

        <div className="flex py-6 justify-end fixed right-20 bottom-0">
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
            {state?.activetab === "skills" ? (id ? "Edit" : "Save") : "Next"}
          </button>
        </div>
      </section>
    </div>
  );
}
