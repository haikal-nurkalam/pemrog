import React from "react";
import Nav from "./template/Nav";
import { Add } from "./Book";

function Member() {
  return (
    <div>
      <Nav></Nav>
      <div className="basepage">
        <Add
          name="Tambah Member"
          buttonName="Tambah Member"
          link="add-member"
        ></Add>
        <table className="table-fixed border-solid border-2 mt-4">
          <thead>
            <tr className=" bg-slate-200">
              <th className="border-solid border-2 p">Name</th>
              <th className="border-solid border-2 p">Address</th>
              <th className="border-solid border-2 p">Phone</th>
              <th className="border-solid border-2 p">Email</th>
              <th className="border-solid border-2 p">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-solid border-2 py-2 px-1 w-[200px]">
                <p className=" line-clamp-1">Andrew ChurchVille</p>
              </td>
              <td className="border-solid border-2 py-2 px-1 w-[400px]">
                <p className=" line-clamp-1">
                  The Sliding Mr. Bones (Next Stop, Pottersville)
                </p>
              </td>
              <td className="border-solid border-2 py-2 px-1">081122112233</td>
              <td className="border-solid border-2 py-2 px-1 w-[250px]">
                <p className=" line-clamp-1">Rooneywelsch@gmail.com</p>
              </td>
              <td className="border-solid border-2 py-2 px-1">
                <div className="flex gap-2">
                  <a
                    href="/edit-member"
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                  >
                    Edit
                  </a>
                  <a
                    href="/delete-member"
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                  >
                    Delete
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

export default Member;
