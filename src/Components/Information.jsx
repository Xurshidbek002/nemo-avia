import React from "react";
import rasm1 from "../assets/haqida1.jpg";
import rasm2 from "../assets/haqida2.jpg";
import rasm3 from "../assets/haqida3.jpg";

function Information() {
  return (
    <>
      <div className="mt-10 pb-10">
        <div className="container px-4">
          <h1 className="text-center text-5xl font-bold mb-6 ">
            Biz haqimizda
          </h1>
          <p className="text-center text-gray-500  ">
            Sizning ishonchli sayohat hamkoringiz
          </p>
          <ul className="flex justify-around max-[800px]:flex-col gap-7 flex-wrap items-center mt-7 mb-8">
            <li
              data-aos="fade-up"
              className="bg-white shadow-[0_2px_5px_#00000050] rounded-2xl w-[47%] max-[500px]:w-[90%] p-4"
            >
              <h3 className="text-3xl font-bold max-[500px]:text-xl mb-3">
                Bizning vazifamiz
              </h3>
              <p className="text-gray-700 max-[500px]:text-[14px]">
                Har bir mijozga individual yondashuv orqali yuqori sifatli va
                qulay sayohat xizmatlarini taqdim etish
              </p>
            </li>
            <li
              data-aos="fade-up"
              className="bg-white shadow-[0_2px_5px_#00000050] rounded-2xl w-[47%] max-[500px]:w-[90%] p-4"
            >
              <h3 className="text-3xl font-bold max-[500px]:text-xl mb-3">
                Bizning maqsadimiz
              </h3>
              <p className="text-gray-700 max-[500px]:text-[14px]">
                O'zbekistonda yetakchi sayohat kompaniyasiga aylanish va xalqaro
                miqyosida tan olingan brend bo'lish
              </p>
            </li>
          </ul>
          <div className="flex justify-between max-[800px]:flex-col  max-[800px]:items-center max-[800px]:text-center">
            <div
              data-aos="flip-left"
              className="w-[48%] max-[800px]:w-[100%]"
            >
              <p className=" leading-9 max-[1097px]:leading-7 text-gray-600 mb-4">
                Bizning turizm kompaniyamiz dunyo bo‘ylab sayohatlar va
                qulayliklar taklif etadi. Biz sizni orzudagi manzilingizga
                yetkazib, unutilmas xotiralar yaratishga yordam beramiz.
                Kompaniyamiz UzAirways, Centrum Air, Turkish Airlines kabi yirik
                aviakompaniyalar bilan hamkorlik qiladi.
              </p>
              <p className="leading-9 max-[1097px]:leading-7 text-gray-600">
                Bizning tajribali jamoamiz har bir detallni hisobga olib,
                rejalashtirilgan mukammal xizmatni taqdim etadi. Biz bilan
                dunyoning istalgan joyiga qulay va ishonchli sayohat qiling!
                Xizmatlarimiz: Fransiyaga turlar va dam olish, Ko‘ngilli tibbiy
                sug‘urtalash, Sug‘urta xizmatlari (Toshkentda va O‘zbekistonda),
                Turfirmalari va turagentliklari O‘zbekistonda, Turistlarni
                sug‘urtalash, Turizm va sayyohlik xizmatlari O‘zbekistonda,
                Turlar Antaliyaga va dam olish Antaliyada, Turlar BAAga va dam
                olish BAAda, Turlar Bali oroliga va dam olish Bali orolida,
                Turlar Germaniyaga va dam olish Germaniyada, Turlar Indoneziyaga
                va dam olish Indoneziyada.
              </p>
            </div>
            <div
              data-aos="flip-right"
              className="w-[48%] max-[800px]:w-[100%] max-[800px]:mt-5 flex flex-col gap-2"
            >
              <img
                src={rasm1}
                alt=""
                className="w-[100%] h-[300px] rounded-2xl object-cover"
              />
              <div className="flex justify-between max-[800px]:justify-center max-[800px]:gap-5 gap-2 w-[100%]">
                <img
                  src={rasm2}
                  alt=""
                  className="w-[300px] h-[195px] rounded-2xl object-cover"
                />
                <img
                  src={rasm3}
                  alt=""
                  className="w-[300px] h-[195px] rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>
        <h2 className="text-center text-5xl font-bold mt-10 mb-10">Bizning jamoa</h2>
        <ul className="flex flex-wrap justify-around gap-7">
          <li className="px-29 rounded-2xl hover: py-8 hover:shadow-[0_2px_9px_purple] shadow-[0_2px_9px_#00000050]">Direktor</li>
          <li className="px-29 rounded-2xl hover: py-8 hover:shadow-[0_2px_9px_purple] shadow-[0_2px_9px_#00000050]">Yurist</li>
          <li className="px-29 rounded-2xl hover: py-8 hover:shadow-[0_2px_9px_purple] shadow-[0_2px_9px_#00000050]">Operator</li>
          <li className="px-29 rounded-2xl hover: py-8 hover:shadow-[0_2px_9px_purple] shadow-[0_2px_9px_#00000050]">Adminstrator</li>
        </ul>
        </div>
      </div>
    </>
  );
}

export default Information;
