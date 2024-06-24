import React from "react";
import Nav from "./template/Nav";

function Book() {
  return (
    <div>
      <Nav></Nav>
      <div className="basepage">
        <Add link="add-book" name="Add Book" buttonName="Add Book"></Add>
        <table className="table-fixed border-solid border-2 mt-4">
          <thead>
            <tr className=" bg-slate-200">
              <th className="border-solid border-2 p">Title</th>
              <th className="border-solid border-2 p">Author</th>
              <th className="border-solid border-2 p">Publisher</th>
              <th className="border-solid border-2 p">Year</th>
              <th className="border-solid border-2 p">Isbn</th>
              <th className="border-solid border-2 p">Total Copies</th>
              <th className="border-solid border-2 p">Available Copies</th>
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
                <p className=" line-clamp-1">Ronnie Yang</p>
              </td>
              <td className="border-solid border-2 py-2 px-1">
                The Sliding Mr. Bones (Next Stop, Pottersville)
              </td>
              <td className="border-solid border-2 py-2 px-1">
                The Sliding Mr. Bones (Next Stop, Pottersville)
              </td>
              <td className="border-solid border-2 py-2 px-1">
                The Sliding Mr. Bones (Next Stop, Pottersville)
              </td>
              <td className="border-solid border-2 py-2 px-1">
                The Sliding Mr. Bones (Next Stop, Pottersville)
              </td>
              <td className="border-solid border-2 py-2 px-1">
                The Sliding Mr. Bones (Next Stop, Pottersville)
              </td>
              <td className="border-solid border-2 py-2 px-1">
                <div className="flex gap-2">
                  <a
                    href="/edit-book"
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                  >
                    Edit
                  </a>
                  <a
                    href="/delete-book"
                    className="px-4 py-2 border-solid border-red-500 border-2 text-red-500 rounded-lg"
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

function Add({ name, link, buttonName }) {
  return (
    <div className="flex justify-between items-center">
      <p className=" text-xl">{name}</p>
      <a
        href={`/${link}`}
        className="px-4 py-2 bg-slate-900 text-white rounded-lg"
      >
        {buttonName}
      </a>
    </div>
  );
}
export { Add, Book };
