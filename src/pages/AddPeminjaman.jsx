import React from "react";
function AddPeminjaman() {
  return (
    <div>
      <div className="flex gap-x-5 w-full p-5 bg-slate-900 text-white">
        <a href="/peminjaman">Back</a>
      </div>
      <div className="flex flex-column justify-center items-center ">
        <div className="flex flex-col my-10 w-[800px] gap-6">
          <p className="text-2xl">Add peminjaman</p>
          <div className="flex flex-col gap-2">
            <label for="idbuku" className="text-sm font-medium text-gray-900">
              Id Buku
            </label>
            <input
              type="number"
              className="border-solid border-2 py-2 px-4"
              placeholder="Input Id Buku"
              name="idbuku"
              id="idbuku"
            ></input>
          </div>
          <div className="flex flex-col gap-2">
            <label for="idmember" className="text-sm font-medium text-gray-900">
              Id Member
            </label>
            <input
              type="number"
              className="border-solid border-2 py-2 px-4"
              placeholder="Input Id Member"
              name="idmember"
              id="idmember"
            ></input>
          </div>
          <div className="flex flex-col gap-2">
            <label
              for="tanggalPeminjaman"
              className="text-sm font-medium text-gray-900"
            >
              Tanggal Peminjaman
            </label>
            <input
              type="date"
              className="border-solid border-2 py-2 px-4"
              placeholder="Input Tanggal Peminjaman"
              name="tanggalPeminjaman"
              id="tanggalPeminjaman"
            ></input>
          </div>
          <div className="flex flex-col gap-2">
            <label
              for="tanggalPengembalian"
              className="text-sm font-medium text-gray-900"
            >
              Tanggal Pengembalian
            </label>
            <input
              type="date"
              className="border-solid border-2 py-2 px-4"
              placeholder="Input Tanggal Pengembalian"
              name="tanggalPengembalian"
              id="tanggalPengembalian"
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

export default AddPeminjaman;
