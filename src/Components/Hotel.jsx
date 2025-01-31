import React from "react";
import hotel1 from "../assets/hotel1.jpg";
import hotel2 from "../assets/hotel2.jpg";
import hotel3 from "../assets/hotel3.jpg";

function Hotel() {
  return (
    <>
      <div className="">
        <div className="">
          <h1 className="text-3xl font-bold text-center">Mehmonhonalar</h1>

          <ul className="flex  justify-center mt-5 flex-wrap gap-5">
            <li className="w-[400px] hover:scale-102 max-[450px]:w-[290px] h-[450px] max-[820px]:w-[700px] max-[730px]:w-[600px] max-[630px]:w-[500px] pb-4 hover:shadow-2xl rounded-tr-2xl rounded-xl shadow-xl rounded-tl-2xl">
              <img
                src={hotel1}
                alt=""
                className="w-[100%] h-[60%] object-cover rounded-tr-2xl rounded-tl-2xl"
              />
              <div className="m-5">
                <h2 className="font-[700] text-2xl pb-2">
                  Hyatt Regency Tashkent
                </h2>
                <p className=" text-gray-800 mb-3">
                  Navoi ko'chasi 1-uy, <br /> Toshkent Zamonaviy mehmonxona
                  markaz markazida
                </p>
                <a
                  href="#"
                  className="bg-amber-600 text-white px-5 rounded-2xl py-1.5"
                >
                  Batafsil malumot
                </a>
              </div>
            </li>
            <li className="w-[400px] hover:scale-102 max-[450px]:w-[290px] h-[450px] max-[820px]:w-[700px] max-[730px]:w-[600px] max-[630px]:w-[500px] pb-4 hover:shadow-2xl rounded-tr-2xl rounded-xl shadow-xl rounded-tl-2xl">
              <img
                src={hotel2}
                alt=""
                className="w-[100%] h-[60%] object-cover rounded-tr-2xl rounded-tl-2xl"
              />
              <div className="m-5">
                <h2 className="font-[700] text-2xl pb-2">
                  Hilton Tashkent City
                </h2>
                <p className=" text-gray-800 mb-3">
                  Islom Karimov ko'chasi 2-uy, <br /> Toshkent Biznes mehmonxona
                  shahar markazida{" "}
                </p>
                <a
                  href="#"
                  className="bg-amber-600 text-white px-5 rounded-2xl py-1.5"
                >
                  Batafsil malumot
                </a>
              </div>
            </li>
            <li className="w-[400px] hover:scale-102 max-[450px]:w-[290px] h-[450px] max-[820px]:w-[700px] max-[730px]:w-[600px] max-[630px]:w-[500px] pb-4 hover:shadow-2xl rounded-tr-2xl rounded-xl shadow-xl rounded-tl-2xl">
              <img
                src={hotel3}
                alt=""
                className="w-[100%] h-[60%] object-cover rounded-tr-2xl rounded-tl-2xl"
              />
              <div className="m-5">
                <h2 className="font-[700] text-2xl pb-2">City Palace Hotel</h2>
                <p className=" text-gray-800 mb-3">
                  Amir Temur ko'chasi 15-uy, <br /> Toshkent Qulay mehmonxona
                  diqqatga sazovor joylar yaqinida{" "}
                </p>
                <a
                  href="#"
                  className="bg-amber-600 text-white px-5 rounded-2xl py-1.5"
                >
                  Batafsil malumot
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Hotel;
