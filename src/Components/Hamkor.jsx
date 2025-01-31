import React from "react";
import Marquee from "react-fast-marquee";
import sam1 from "../assets/hamkor1.jpg";


function Hamkor() {
  return (
    <>
      <div className="mt-10">
        <h2 className="text-center text-4xl font-bold mb-10">Hamlorlarimiz</h2>
        <Marquee>
          <div className="text-center mr-20 ">
            <img src={sam1} alt="" className="rounded-2xl w-[200px] object-cover" />
            <p className="text-xl">Uzarvayz</p>
          </div>
          <div className="text-center mr-20 ">
            <img src={sam1} alt="" className="rounded-2xl w-[200px] object-cover" />
            <p className="text-xl">Centrum air</p>
          </div>
          <div className="text-center mr-20 ">
            <img src={sam1} alt="" className="rounded-2xl w-[200px] object-cover" />
            <p className="text-xl">Turkish airlines</p>
          </div>
          <div className="text-center mr-20 ">
            <img src={sam1} alt="" className="rounded-2xl w-[200px] object-cover" />
            <p className="text-xl">Emirates</p>
          </div>
          <div className="text-center mr-20 ">
            <img src={sam1} alt="" className="rounded-2xl w-[200px] object-cover" />
            <p className="text-xl">Qatar airvays</p>
          </div>
          <div className="text-center mr-20 ">
            <img src={sam1} alt="" className="rounded-2xl w-[200px] object-cover" />
            <p className="text-xl">O'zbek air</p>
          </div>
        </Marquee>
      </div>
    </>
  );
}

export default Hamkor;
