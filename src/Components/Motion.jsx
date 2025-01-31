import React from "react";
import photo from "../assets/hotel1.jpg";

function Motion() {
  return (
    <>
      <div className="">
        <div className="container px-4">
          <h2 className="text-4xl font-bold text-center mb-9">Mashhur shaharlar</h2>
          <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
              <div class="relative h-48 overflow-hidden">
                <img
                  src={photo}
                  alt="Dubai"
                  class="w-full h-full object-cover transition duration-300 hover:scale-110"
                />
                {/* <div class="absolute inset-0 bg-[#00000010] bg-opacity-20 transition duration-300 hover:bg-opacity-10"></div> */}
              </div>
              <div class="p-4">
                <h3 class="text-lg font-semibold text-nemo-dark mb-2">Dubai</h3>
                <p class="text-gray-600">
                  Zamonaviy arxitektura va hashamatli savdo markazlari
                </p>
                <button class="mt-4 w-full bg-[#F26522] text-white px-4 py-2 rounded-full hover:bg-[#E85A1F] transition-colors">
                  Batafsil ma'lumot
                </button>
              </div>
            </div>
            <div class="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
              <div class="relative h-48 overflow-hidden">
                <img
                  src={photo}
                  alt="Dubai"
                  class="w-full h-full object-cover transition duration-300 hover:scale-110"
                />
                {/* <div class="absolute inset-0 bg-black bg-opacity-20 transition duration-300 hover:bg-opacity-10"></div> */}
              </div>
              <div class="p-4">
                <h3 class="text-lg font-semibold text-nemo-dark mb-2">Dubai</h3>
                <p class="text-gray-600">
                  Zamonaviy arxitektura va hashamatli savdo markazlari
                </p>
                <button class="mt-4 w-full bg-[#F26522] text-white px-4 py-2 rounded-full hover:bg-[#E85A1F] transition-colors">
                  Batafsil ma'lumot
                </button>
              </div>
            </div>
            <div class="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
              <div class="relative h-48 overflow-hidden">
                <img
                  src={photo}
                  alt="Dubai"
                  class="w-full h-full object-cover transition duration-300 hover:scale-110"
                />
                {/* <div class="absolute inset-0 bg-black bg-opacity-20 transition duration-300 hover:bg-opacity-10"></div> */}
              </div>
              <div class="p-4">
                <h3 class="text-lg font-semibold text-nemo-dark mb-2">Dubai</h3>
                <p class="text-gray-600">
                  Zamonaviy arxitektura va hashamatli savdo markazlari
                </p>
                <button class="mt-4 w-full bg-[#F26522] text-white px-4 py-2 rounded-full hover:bg-[#E85A1F] transition-colors">
                  Batafsil ma'lumot
                </button>
              </div>
            </div>
            <div class="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
              <div class="relative h-48 overflow-hidden">
                <img
                  src={photo}
                  alt="Dubai"
                  class="w-full h-full object-cover transition duration-300 hover:scale-110"
                />
                {/* <div class="absolute inset-0 bg-[#00000010] bg-opacity-20 transition duration-300 hover:bg-opacity-10"></div> */}
              </div>
              <div class="p-4">
                <h3 class="text-lg font-semibold text-nemo-dark mb-2">Dubai</h3>
                <p class="text-gray-600">
                  Zamonaviy arxitektura va hashamatli savdo markazlari
                </p>
                <button class="mt-4 w-full bg-[#F26522] text-white px-4 py-2 rounded-full hover:bg-[#E85A1F] transition-colors">
                  Batafsil ma'lumot
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Motion;
