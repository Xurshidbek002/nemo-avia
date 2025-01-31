import React from "react";

function Conactet() {
  return (
    <>
      <div className=" bg-gray-100 pb-20">
        <div className="container px-4">
          <h2 className="">Biz bilan bog'lanish</h2>
          <p className="">
            Savollaringiz bormi?. Biz sizga yordam berishdan xursandmiz
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <form
              action=""
              className="flex flex-col justify-between gap-5 bg-white rounded-lg shadow-lg p-6"
            >
              <label htmlFor="" className="flex flex-col text-gray-600">
                Ismingiz
                <input
                  type="text"
                  className="border-1 focus:scale-102 hover:shadow-md focus:shadow-lg outline-none px-3 mt-1 h-[45px] rounded-sm border-gray-300"
                />
              </label>
              <label htmlFor="" className="flex flex-col text-gray-600">
                Emailingiz
                <input
                  type="email"
                  className="border-1 focus:scale-102 hover:shadow-md focus:shadow-lg outline-none px-3 mt-1 h-[45px] rounded-sm border-gray-300"
                />
              </label>
              <label htmlFor="" className="flex flex-col text-gray-600">
                Telefon raqamingiz
                <input
                  type="tell"
                  className="border-1 focus:scale-102 hover:shadow-md focus:shadow-lg outline-none px-3 mt-1 h-[45px] rounded-sm border-gray-300"
                />
              </label>
              <label htmlFor="" className="flex flex-col text-gray-600">
                Mavzu
                <input
                  type="text"
                  className="border-1 focus:scale-102 hover:shadow-md focus:shadow-lg outline-none px-3 mt-1 h-[45px] rounded-sm border-gray-300"
                />
              </label>
              <label htmlFor="" className="flex flex-col text-gray-600">
                Xabaringiz
                <textarea
                  name=""
                  id=""
                  className="border-1 focus:scale-102 hover:shadow-md focus:shadow-lg outline-none px-3 mt-1 h-[90px] rounded-sm border-gray-300"
                ></textarea>
              </label>
              <button className="bg-gray-900 hover:bg-gray-600 hover:scale-101 text-white text-xl font-bold rounded-lg py-2 text-center">Yuborish</button>
            </form>
            <div className=" space-y-6 gap-5">
              <div className="p-6 bg-white rounded-lg shadow-lg ">
                <p className=" mb-[20px] text-xl font-medium">
                  Aloqa manzillari
                </p>
                <p className=" mb-[20px] ">
                  Manzil: toshkent shahri muqumiy kochasi
                </p>
                <p className=" mb-[20px] ">Tel:+998332221123</p>
                <p className=" mb-[20px] ">Email:@egooist.pro@gmail.com</p>
                <p className="">Ish vaqti: du-sha 24soat</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="w-full h-[350px] rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.638628128215!2d69.28315707512176!3d41.33847079902936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b4e3088e9bf%3A0xdd9a89a16d423604!2sIT%20Time%20Academy!5e0!3m2!1sen!2s!4v1738337908159!5m2!1sen!2s"
                    // width="600"
                    // height="450"
                    // style="border:0;"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Conactet;
