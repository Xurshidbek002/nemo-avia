import React from "react";

function Chiptalar() {
  return (
    <>
      <div className="mt-10 pb-10">
        <div className="container px-4">
          <h2 className="font-bold text-4xl mb-5 ">Aviachiptalar</h2>
          <form action="" className=" shadow-[2px_3px_9px_#00000050] p-8 rounded-2xl">
            <div className="flex gap-6 max-[596px]:justify-center mt-1 mb-4">
              <a href="#" className="px-5 py-2 text-white rounded-[7px] bg-amber-600">
                Borish
              </a>
              <a href="#" className="px-5 py-2 text-white rounded-[7px] bg-gray-400">
                Qaytish
              </a>
            </div>
            <div className="flex justify-between gap-5 flex-wrap">
              <label htmlFor="" className="flex flex-col max-[596px]:w-[100%] max-[596px]:items-center text-gray-700">
                Qayerdan
                <input type="text" required className="border max-[596px]:text-center rounded-[4px] max-[596px]:w-[100%] w-60 p-1" />
              </label>
              <label htmlFor="" className="flex flex-col max-[596px]:w-[100%] max-[596px]:items-center text-gray-700">
          Qayerga
                <input type="text" required className=" border max-[596px]:text-center rounded-[4px] max-[596px]:w-[100%] w-60 p-1" />
              </label>
              <label htmlFor="" className="flex flex-col max-[596px]:w-[100%] max-[596px]:items-center text-gray-700">
                Jo'natish sanasi
                <input type="date" required className=" border max-[596px]:text-center rounded-[4px] max-[596px]:w-[100%] w-60 p-1" />
              </label>
              <label htmlFor="" className="flex flex-col max-[596px]:w-[100%] max-[596px]:items-center text-gray-700">
                Yo'lovchilar
                <input type="number" required placeholder="1" className=" border max-[596px]:text-center rounded-[4px] max-[596px]:w-[100%]  w-60 p-1" />
              </label>
            </div>
            <button type="submit" className="w-[100%] text-center mt-5 bg-amber-600 py-2 text-white font-medium rounded-xl">Qidirish</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Chiptalar;
