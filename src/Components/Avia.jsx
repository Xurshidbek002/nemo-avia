import React from "react";
import "../index.css";
import { AiOutlineUser } from "react-icons/ai";
import { BiAlarm } from "react-icons/bi";
import { FaMapMarkedAlt } from "react-icons/fa";

function Avia() {
  return (
    <>
      <div className="bg-amber-600 pt-[100px] ">
        <div className="container px-4 pb-[200px] pt-[100px] max-[500px]:pt-0 flex flex-col items-center">
          <h1 className="text-[60px]  text-center font-[700] leading-18 max-[800px]:text-[40px] max-[500px]:text-[30px] text-white">
            Sayohatingizni biz bilan boshlang
          </h1>
          <p className="text-white text-xl pt-4 max-[500px]:text-sm pb-[50px]">
            Nemo Travel - huzur uchun yo'l
          </p>
          <div data-aos="zoom-out" className="bg-white w-[79%]  p-11 rounded-[75px] flex max-[850px]:flex-col max-[850px]:w-auto max-[850px]:rounded-4xl flex-wrap justify-between gap-13 max-[1060px]:justify-center items-center">
            <ul className="flex gap-16 max-[850px]:flex-col max-[850px]:gap-6">
              <li className=" flex items-center gap-1.5 justify-center  ">
                <div className="p-2 rounded-4xl bg-amber-600">
                  <AiOutlineUser className="text-3xl text-white" />
                </div>
                <div className="">
                  <p className=" opacity-70">Mamnun mijozlar</p>
                  <h2 className=" font-[700]">45000+</h2>
                </div>
              </li>
              <li className=" flex items-center gap-1.5">
                <div className="p-2 rounded-4xl bg-amber-600">
                  <FaMapMarkedAlt className="text-3xl text-white" />
                </div>
                <div className="">
                  <p className=" opacity-70">Mamlakatlar</p>
                  <h2 className=" font-[700]">30+</h2>
                </div>
              </li>
              <li className=" flex items-center gap-1.5">
                <div className="p-2 rounded-4xl bg-amber-600">
                  <BiAlarm className="text-3xl text-white" />
                </div>
                <div className="">
                  <p className=" opacity-70">Tajriba</p>
                  <h2 className=" font-[700]">5 + Yil</h2>
                </div>
              </li>
            </ul>
            <a
              href="#"
              className=" hover:bg-amber-700 px-3 max-[1100px]:mt-10 max-[850px]:mt-7 bg-amber-600 text-white rounded-3xl mx-auto py-1 text-[19px]"
            >
              Batafsil malumot
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Avia;
