import React from "react";

function AddBook() {
  return (
    <div>
      <div className="flex gap-x-5 w-full p-5 bg-slate-900 text-white">
        <a href="/book">Back</a>
      </div>
      <div className="flex flex-column justify-center items-center ">
        <div className="flex flex-col my-10 w-[800px] gap-6">
          <p className="text-2xl">Add book</p>
          <div className="flex flex-col gap-2">
            <label for="namabuku" className="text-sm font-medium text-gray-900">
              Nama Buku
            </label>
            <input
              type="text"
              className="border-solid border-2 py-2 px-4"
              placeholder="Nama Buku"
              name="namabuku"
              id="namabuku"
            ></input>
          </div>
          <div className="flex flex-col gap-2">
            <label for="author" className="text-sm font-medium text-gray-900">
              Author
            </label>
            <input
              type="text"
              className="border-solid border-2 py-2 px-4"
              placeholder="Tulis nama author disini"
              name="author"
              id="author"
            ></input>
          </div>
          <div className="flex flex-col gap-2">
            <label
              for="publisher"
              className="text-sm font-medium text-gray-900"
            >
              Publisher
            </label>
            <input
              type="text"
              className="border-solid border-2 py-2 px-4"
              placeholder="Tulis nama publisher disini"
              name="publisher"
              id="publisher"
            ></input>
          </div>
          <div className="flex flex-col gap-2">
            <label
              for="tahunpublish"
              className="text-sm font-medium text-gray-900"
            >
              Tahun Publish
            </label>
            <input
              type="date"
              className="border-solid border-2 py-2 px-4"
              name="tahunpublish"
              id="tahunpublish"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label for="isbn" className="text-sm font-medium text-gray-900">
              ISBN
            </label>
            <input
              type="text"
              className="border-solid border-2 py-2 px-4"
              placeholder="Tulis isbn disini"
              name="isbn"
              id="isbn"
            ></input>
          </div>
          <div className="flex flex-col gap-2">
            <label
              for="total_copies"
              className="text-sm font-medium text-gray-900"
            >
              Total Copy Buku
            </label>
            <input
              type="number"
              className="border-solid border-2 py-2 px-4"
              placeholder="Tulis total buku disini"
              name="total_copies"
              id="total_copies"
            ></input>
          </div>
          <button className="w-full py-4 bg-slate-800 rounded-lg text-white">
            Save Buku
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddBook;
