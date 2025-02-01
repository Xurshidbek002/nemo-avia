import React from "react";
import logo from "../assets/logo.png";
import { FaInstagram, FaTelegram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Footer() {
  return (
    <>
      <div data-aos="fade-up" className=" bg-gray-700">
        <div className="container px-4">
          <div className="max-w-7xl sm:px-6 py-16">
            <ul className="grid grid-cols-1 md:grid-cols-4 gap-8 border-b-1 pb-5 border-gray-500">
              <li className=" space-y-4">
                <img src={logo} alt="" className="w-28" />
                <p className=" text-gray-400">Toshkent shaxri muqumiy ko'chasi 44-a uy</p>
              </li>
              <li className=" space-y-4">
                <h2 className="text-xl font-bold text-white ">Bo'lanish</h2>
                <p className="text-gray-400">Tel:+9983322211223</p>
                <p className="text-gray-400">Email: @egooist.pro@gmail.com</p>
              </li>
              <li className=" space-y-4">
                <h2 className="text-xl font-bold text-white ">Ijtimoiy Tarmoqlar</h2>
                <div className="flex gap-3">
                <FaTelegram className="text-gray-400 cursor-pointer text-[20px]"/>
                <FaInstagram className="text-gray-400 cursor-pointer text-[20px]"/>
                <SiGmail className="text-gray-400 cursor-pointer text-[20px]"/>
                </div>
              </li>
              <li className=" space-y-4">
                <h2 className="text-xl font-bold text-white ">Manzil</h2>
                <p className="text-gray-400">Toshkent shaxri muqumiy ko'chasi 44-a uy</p>
              </li>
            </ul>
            <p className="text-gray-400 text-center mt-10">2025 Nemo Avia Trip. Barcha huquqlar himoyalangan.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
