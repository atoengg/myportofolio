import React, { useState } from "react";
import Layouts from "../../layouts/Layouts";
import { gif, mee } from "../../../image";
import Marquee from "react-fast-marquee";
import { BsX } from "react-icons/bs";
import {
  dataExperience,
  dataSkills,
} from "../../components/DataComponents/DataComponents";

const AboutMe = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };
  return (
    <>
      <Layouts>
        <div className="py-20">
          <section className="container">
            <h4 className="font-bold uppercase text-2xl mb-3">
              {">_ About Me"}
            </h4>
            <div className="flex flex-wrap items-center gap-8 lg:gap-0">
              <div className="w-full mb-6 lg:w-6/12 lg:mb-0">
                <div className="relative">
                  <div className="text-center">
                    <img
                      src={mee}
                      alt=""
                      className="w-full max-w-[350px] h-auto"
                    />
                  </div>

                  <div className="absolute w-full max-w-[350px] h-full -z-[1] top-[2%]">
                    <span>
                      <img src={gif} alt="" className="md:scale-125" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-5/12 ">
                <h3 className="font-semibold mb-3 text-lg lg:text-xl">
                  Hai Kidss🖖, who am i?
                </h3>
                <div>
                  <p className="text-sm leading-relaxed">
                    perkenalkan saya Mohammad Irham Al Karim dibesarkan oleh
                    Ayah dan Ibu di kota Gresik. Yapss, saya kelahiran tahun
                    2002 dari 1 saudara. Saya suka dunia IT mulai dari kelas 2
                    MTS/SMP, waktu itu iseng baca artikel tentang hacker dan
                    dari situ mulai mengenal istilah bahasa pemrogaman. Semenjak
                    kejadian itu saya pun tertarik untuk mendalami dunia IT.
                  </p>

                  <p className="text-sm leading-relaxed my-2">
                    sebelum saya memiliki minat di dunia IT khususnya software
                    engineering, saya mempunyai hobi yang masih saya lakukan
                    sampai sekarang seperti bermain voli, hiking, dan camping.
                  </p>

                  <p className="text-sm leading-relaxed my-2">
                    pertama kali saya belajar bahasa pemrogaman dimulai saat
                    saya duduk di bangku SMA tepatnya kelas 12, dengan
                    bermodalkan menonton vidio tutorial youtube. Pada waktu itu
                    saya sempat mengalami kesulitan dalam mempelajari bahasa
                    pemrogaman. Bahkan saat kuliah kemampuan akademik saya bisa
                    di bilang biasa-biasa saja.
                  </p>

                  <p className="text-sm leading-relaxed mt-2">
                    tepatnya pada semester 7, saya mengikuti program dari
                    kemendikbud yakni kampus merdeka studi independent di mitra
                    alterra academy. Saya berfokus menekuni bidang front end
                    dengan menggunakan tech stack react js, yang saat itu tidak
                    banyak yang saya ketahui soal tech stack react js. Namun,
                    berkat didikan dari mentor dan usaha keras saya dalam
                    belajar, saya pun akhirnya mampu membuat aplikasi web dengan
                    menggunakan tech stack react js.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="container my-10">
            <div className="text-center">
              <h4 className="font-bold uppercase text-2xl mb-3">
                {">_ My Skills"}
              </h4>
              <p className="text-sm">
                The skills, tools and technologies I am really good at:
              </p>

              <Marquee autoFill pauseOnClick>
                {dataSkills?.slice(0, 7).map((item, index) => (
                  <div
                    className="bg-transparent m-1 rounded-xl flex space-x-5 p-4 font-bold text-base cursor-pointer "
                    key={index}
                  >
                    <div className="flex items-center justify-center gap-2">
                      <img
                        src={item.icon}
                        alt="icon-skills"
                        className="w-10 h-10"
                      />
                      <span>{item.title}</span>
                    </div>
                  </div>
                ))}
              </Marquee>

              <Marquee autoFill pauseOnClick direction="right">
                {dataSkills?.slice(7, 14).map((item, index) => (
                  <div
                    className="bg-transparent m-1 rounded-xl flex space-x-5 p-4 font-bold text-base cursor-pointer "
                    key={index}
                  >
                    <div className="flex items-center justify-center gap-2">
                      <img
                        src={item.icon}
                        alt="icon-skills"
                        className="w-10 h-10"
                      />
                      <span>{item.title}</span>
                    </div>
                  </div>
                ))}
              </Marquee>
            </div>
          </section>

          <section className="container my-10">
            <div className="text-center">
              <h4 className="font-bold uppercase text-2xl mb-3">
                {">_ My Experience"}
              </h4>
              <p className="text-sm">
                Here is a quick summary of my most recent experiences:
              </p>
            </div>

            <div className="mt-8">
              {dataExperience?.map((item, index) => (
                <ul
                  className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical"
                  key={index}
                >
                  <li onClick={() => handleImageClick(item.image)}>
                    <hr />
                    {item.content}
                    <hr />
                  </li>
                </ul>
              ))}
            </div>
          </section>

          {selectedImage && (
            <div className="fixed top-0 left-0 w-full h-full z-[9999] bg-black bg-opacity-50 flex items-center justify-center">
              <img
                src={selectedImage}
                alt="Selected Experience"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 block lg:max-w-3xl lg:max-h-[95%] object-contain rounded-md"
              />
              <button
                className="absolute top-2 right-2 text-white active:text-[#030712]"
                onClick={() => setSelectedImage(null)}
              >
                <BsX size={40} />
              </button>
            </div>
          )}
        </div>
      </Layouts>
    </>
  );
};

export default AboutMe;
