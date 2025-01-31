import React, { useState, useEffect } from "react";
import "../index.css";
import logo from "../assets/logo.png";
import { TiThMenu } from "react-icons/ti";

function Header() {
  const [modal, setModal] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed w-[100%] text-white z-50 py-4 transition-all duration-300 ${
          scrolled ? "bg-gray-500 shadow-2xl"  : "bg-amber-600"
        }`}
      >
        <div className="container px-4 flex justify-between items-center">
          <a href="">
            <img src={logo} alt="" className="w-[150px] max-[500px]:w-[80px]" />
          </a>
          <nav className="flex gap-4 max-[800px]:hidden">
            <a href="#" className="hover:text-green-500">
              Asosiy
            </a>
            <a href="#" className="hover:text-green-500">
              Biz haqimizda
            </a>
            <a href="#" className="hover:text-green-500">
              Turlar
            </a>
            <a href="#" className="hover:text-green-500">
              Mehmonxonalar
            </a>
            <a href="#" className="hover:text-green-500">
              Aviachiptalar
            </a>
            <a href="#" className="hover:text-green-500">
              Aloqa
            </a>
          </nav>

          <select name="" id="" className="text-xl border-none outline-none">
            <option className="text-black" value="uz">
              Uz
            </option>
            <option className="text-black" value="ru">
              Ru
            </option>
          </select>
          <div className="hidden max-[800px]:block" onClick={toggleModal}>
            <TiThMenu className="text-[20px] hover:text-blue-950 cursor-pointer" />
          </div>
        </div>

        <div className="container">
          {modal ? (
            <nav className="flex gap-1 px-4 flex-col items-center">
              <a href="#" className="bg-amber-400 py-1 px-[100%] hover:bg-amber-300">
                Asosiy
              </a>
              <a href="#" className="bg-amber-400 py-1 px-[100%] hover:bg-amber-300 text-center">
                Biz haqimizda
              </a>
              <a href="#" className="bg-amber-400 py-1 px-[100%] hover:bg-amber-300">
                Turlar
              </a>
              <a href="#" className="bg-amber-400 py-1 px-[100%] hover:bg-amber-300">
                Mehmonxonalar
              </a>
              <a href="#" className="bg-amber-400 py-1 px-[100%] hover:bg-amber-300">
                Aviachiptalar
              </a>
              <a href="#" className="bg-amber-400 py-1 px-[100%] hover:bg-amber-300">
                Aloqa
              </a>
            </nav>
          ) : null}
        </div>
      </header>
    </>
  );
}

export default Header;
