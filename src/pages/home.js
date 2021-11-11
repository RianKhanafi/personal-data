import Header from "parts/Header";
import React from "react";

export default function Home() {
  return (
    <div>
      {/* create simple header using tailwind */}
      <Header />

      <section className="container mx-auto">
        <div className="my-12">
          <div className="mb-3">
            <span className="text-2xl font-bold">List data</span>
          </div>

          <button class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
            Tambah Data Baru +
          </button>
        </div>
        <table className="table-auto w-full">
          <thead className="bg-gray-50 border">
            <tr>
              <th className="py-6 px-2 text-gray-500">ID</th>
              <th className="py-6 px-2 text-gray-500">Nama</th>
              <th className="py-6 px-2 text-gray-500">Alamat</th>
              <th className="py-6 px-2 text-gray-500">TTL</th>
              <th className="py-6 px-2 text-gray-500">Email</th>
              <th className="py-6 px-2 text-gray-500">No. Hp</th>

              <th className="py-6 px-2 text-gray-500">Edit</th>
              <th className="py-6 px-2 text-gray-500">Hapus</th>
            </tr>
          </thead>
          <tbody>
            <tr class="whitespace-nowrap border">
              <td class="py-6 px-2 text-center  text-gray-500">1</td>
              <td class="py-6 px-2 text-center">as</td>
              <td class="py-6 px-2 text-center">a</td>
              <td class="py-6 px-2 text-center">a</td>
              <td class="py-6 px-2 text-center">
                {/* <div class=" text-gray-500">jhondoe@example.com</div> */}a
              </td>
              <td class="py-6 px-2 text-center  text-gray-500">2021-1-12</td>
              <td class="py-6 px-2 text-center  ">
                <a href="#" class="px-4 py-1  text-white bg-blue-400 rounded">
                  Edit
                </a>
              </td>
              <td class="py-6 px-2 text-center">
                <a href="#" class="px-4 py-1  text-white bg-red-400 rounded">
                  Delete
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}
