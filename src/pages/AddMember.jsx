import React from "react";

function AddMember() {
  return (
    <div>
      <div className="flex gap-x-5 w-full p-5 bg-slate-900 text-white">
        <a href="/member">Back</a>
      </div>
      <div className="flex flex-column justify-center items-center ">
        <div className="flex flex-col my-10 w-[800px] gap-6">
          <p className="text-2xl">Add member</p>
          <div className="flex flex-col gap-2">
            <label for="name" className="text-sm font-medium text-gray-900">
              Nama
            </label>
            <input
              type="text"
              className="border-solid border-2 py-2 px-4"
              placeholder="Tambah nama"
              name="name"
              id="name"
            ></input>
          </div>
          <div className="flex flex-col gap-2">
            <label for="address" className="text-sm font-medium text-gray-900">
              Alamat
            </label>
            <input
              type="text"
              className="border-solid border-2 py-2 px-4"
              placeholder="Tambah alamat"
              name="address"
              id="address"
            ></input>
          </div>
          <div className="flex flex-col gap-2">
            <label for="phone" className="text-sm font-medium text-gray-900">
              Nomor Telepon
            </label>
            <input
              type="number"
              className="border-solid border-2 py-2 px-4"
              placeholder="Tambah Nomor Telepon"
              name="phone"
              id="phone"
            ></input>
          </div>
          <div className="flex flex-col gap-2">
            <label for="email" className="text-sm font-medium text-gray-900">
              Email
            </label>
            <input
              type="text"
              className="border-solid border-2 py-2 px-4"
              placeholder="Tambah Email"
              name="email"
              id="email"
            ></input>
          </div>
          <button className="w-full py-4 bg-slate-800 rounded-lg text-white">
            Save Peminjaman
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddMember;
