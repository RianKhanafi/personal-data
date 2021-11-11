import Header from "parts/Header";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { ReactComponent as EmptyState } from "assets/icons/empty-state.svg";
export default function Home() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(users);
  }, []);
  const history = useHistory();

  const handleDelete = (id) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const newUsers = users.filter((user) => user.datadiri?.id !== id);
    localStorage.setItem("users", JSON.stringify(newUsers));
    setUsers(newUsers.filter((user) => user.datadiri?.id !== id));
  };

  return (
    <div style={{ width: "100%" }}>
      <Header />

      <section className="container mx-auto mt-20 lg:mt-32 xl:mt-32 pl-4 pr-4 relative">
        <div className="my-12">
          <div className="mb-3">
            <span className="text-md xl:text-2xl lg:text-2xl font-bold">
              List data
            </span>
          </div>
          <button
            className="bg-blue-500  hover:bg-blue-700 text-white font-smibold xl:font-bold py-2 px-2 xl:py-2 xl:px-4 text-xs xl:text-lg rounded-sm xl:rounded border-none"
            onClick={() => {
              history.push("/new-data");
            }}
          >
            Tambah Data Baru +
          </button>
        </div>
        <div className="xs:overflow-auto ">
          <table className="table-auto w-full">
            <thead className="bg-gray-50 border">
              <tr>
                <th className="py-4 xl:py-6 px-2 text-gray-500 text-xs xs:text-xs md:text-base lg:text-base  xl:text-md">
                  ID
                </th>
                <th className="py-4 xl:py-6 px-2 text-gray-500 text-xs xs:text-xs md:text-base lg:text-base  xl:text-md">
                  Nama
                </th>
                <th className="py-4 xl:py-6 px-2 text-gray-500 text-xs xs:text-xs md:text-base lg:text-base  xl:text-md">
                  Alamat
                </th>
                <th className="py-4 xl:py-6 px-2 text-gray-500 text-xs xs:text-xs md:text-base lg:text-base  xl:text-md">
                  TTL
                </th>
                <th className="py-4 xl:py-6 px-2 text-gray-500 text-xs xs:text-xs md:text-base lg:text-base  xl:text-md">
                  Email
                </th>
                <th className="py-4 xl:py-6 px-2 text-gray-500 text-xs xs:text-xs md:text-base lg:text-base  xl:text-md">
                  No. Hp
                </th>

                <th className="py-4 xl:py-6 px-2 text-gray-500 text-xs xs:text-xs md:text-base lg:text-base  xl:text-md">
                  Edit
                </th>
                <th className="py-4 xl:py-6 px-2 text-gray-500 text-xs xs:text-xs md:text-base lg:text-base  xl:text-md">
                  Hapus
                </th>
              </tr>
            </thead>
            <tbody>
              {!users?.length ? (
                <tr>
                  <td colSpan="8" align="center">
                    <EmptyState
                      className="cursor-pointer xl:mt-16 lg:mt-16 w-48 xl:w-auto"
                      onClick={() => {
                        history.push("/new-data");
                      }}
                    />
                  </td>
                </tr>
              ) : null}
              {users.map((user, index) => (
                <tr className="whitespace-nowrap border" key={index}>
                  <td className="py-4 xl:py-6 px-2 text-left xs:text-left xl:text-center  text-gray-500 text-xs xs:text-xs md:text-base lg:text-base  xl:text-md  ">
                    {user["datadiri"]?.id}
                  </td>
                  <td className="py-4 xl:py-6 px-2 text-left xs:text-left xl:text-center text-xs xs:text-xs md:text-base lg:text-base  xl:text-md text-xs xs:text-xs md:text-base lg:text-base  xl:text-md">
                    {user["datadiri"]?.nama_lengkap}
                  </td>
                  <td className="py-4 xl:py-6 px-2 text-left xs:text-left xl:text-center text-xs xs:text-xs md:text-base lg:text-base  xl:text-md">
                    {user["datadiri"]?.address}
                  </td>
                  <td className="py-4 xl:py-6 px-2 text-left xs:text-left xl:text-center text-xs xs:text-xs md:text-base lg:text-base  xl:text-md">
                    {user["datadiri"]?.ttl}
                  </td>
                  <td className="py-4 xl:py-6 px-2 text-left xs:text-left xl:text-center text-xs xs:text-xs md:text-base lg:text-base  xl:text-md">
                    {user["datadiri"]?.email}a
                  </td>
                  <td className="py-4 xl:py-6 px-2 text-left xs:text-left xl:text-center text-xs xs:text-xs md:text-base lg:text-base  xl:text-md  text-gray-500">
                    {user["datadiri"]?.no_phone}
                  </td>
                  <td className="py-4 xl:py-6 px-2 text-left xs:text-left xl:text-center text-xs xs:text-xs md:text-base lg:text-base  xl:text-md  ">
                    <button
                      className="px-4 py-1  text-white bg-blue-400 rounded"
                      onClick={() => {
                        history.push(`/detail-data/${user["datadiri"]?.id}`);
                      }}
                    >
                      Edit
                    </button>
                  </td>
                  <td className="py-4 xl:py-6 px-2 text-left xs:text-left xl:text-center text-xs xs:text-xs md:text-base lg:text-base  xl:text-md">
                    <button
                      className="px-4 py-1  text-white bg-red-400 rounded"
                      onClick={() => handleDelete(user["datadiri"]?.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
