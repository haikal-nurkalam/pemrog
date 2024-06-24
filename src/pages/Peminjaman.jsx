import React from "react";
import Nav from "./template/Nav";
import { Add } from "./Book";

function Peminjaman() {
  return (
    <div>
      <Nav />
      <div className="basepage">
        <Add
          link="add-peminjaman"
          name="Tambah Peminjaman"
          buttonName="Tambah Peminjaman"
        ></Add>
        <table className="table-fixed border-solid border-2 mt-4">
          <thead>
            <tr className=" bg-slate-200">
              <th className="border-solid border-2 p">Book</th>
              <th className="border-solid border-2 p">Member</th>
              <th className="border-solid border-2 p">Member ID</th>
              <th className="border-solid border-2 p">Tanggal Peminjaman</th>
              <th className="border-solid border-2 p">Tanggal Pengembalian</th>
              <th className="border-solid border-2 p">Status</th>
              <th className="border-solid border-2 p">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-solid border-2 py-2 px-1 w-[300px]">
                <p className=" line-clamp-1">
                  The Sliding Mr. Bones (Next Stop, Pottersville)
                </p>
              </td>
              <td className="border-solid border-2 py-2 px-1 w-[200px]">
                <p className=" line-clamp-1">Rooney</p>
              </td>
              <td className="border-solid border-2 py-2 px-1">221123123</td>
              <td className="border-solid border-2 py-2 px-1">22/10/2024</td>
              <td className="border-solid border-2 py-2 px-1">29/10/2024</td>
              <td className="border-solid border-2 py-2 px-1">Peminjaman</td>
              <td className="border-solid border-2 py-2 px-1">
                <div className="flex gap-2">
                  <a
                    href="/pengembalian"
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                  >
                    Pengembalian
                  </a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Peminjaman;
