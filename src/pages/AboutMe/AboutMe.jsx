import React from "react";
import Layouts from "../../layouts/Layouts";
import { gif, mee } from "../../../image";
import Marquee from "react-fast-marquee";
import { dataSkills } from "../../components/DataComponents/DataComponents";

const AboutMe = () => {
  return (
    <>
      <Layouts>
        <div className="py-20">
          <section className="container">
            <div className="flex flex-wrap items-center">
              <div className="w-full mb-6 lg:w-6/12 lg:mb-0">
                <h4 className="font-bold uppercase text-[#030712] text-xl mb-3">
                  {">_ About Me"}
                </h4>

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
              <div className="w-full lg:w-5/12">
                <h3 className="font-semibold mb-3 lg:text-lg">
                  Hai Kidss🖖, who am i?
                </h3>
                <div>
                  <p className="text-sm">
                    perkenalkan saya Mohammad Irham Al Karim dibesarkan oleh
                    Ayah dan Ibu di kota Gresik. Yapss, saya kelahiran tahun
                    2002 dari 1 saudara. Saya suka dunia IT mulai dari kelas 2
                    MTS/SMP, waktu itu iseng baca artikel tentang hacker dan
                    dari situ mulai mengenal istilah bahasa pemrogaman. Semenjak
                    kejadian itu saya pun tertarik untuk mendalami dunia IT.
                  </p>

                  <p className="text-sm my-2">
                    sebelum saya memiliki minat di dunia IT khususnya software
                    engineering, saya mempunyai hobi yang masih saya lakukan
                    sampai sekarang seperti bermain voli, hiking, dan camping.
                  </p>

                  <p className="text-sm my-2">
                    pertama kali saya belajar bahasa pemrogaman dimulai saat
                    saya duduk di bangku SMA tepatnya kelas 12, dengan
                    bermodalkan menonton vidio tutorial youtube. Pada waktu itu
                    saya sempat mengalami kesulitan dalam mempelajari bahasa
                    pemrogaman. Bahkan saat kuliah kemampuan akademik saya bisa
                    di bilang biasa-biasa saja.
                  </p>

                  <p className="text-sm my-2">
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
              <h4 className="font-bold uppercase text-[#030712] text-xl mb-3">
                {">_ My Skills"}
              </h4>
              <p className="text-[#030712] text-sm">
                The skills, tools and technologies I am really good at:
              </p>

              <Marquee autoFill pauseOnClick>
                {dataSkills?.slice(0, 7).map((item, index) => (
                  <div
                    className="bg-transparent m-1 rounded-xl flex space-x-5 p-4 font-bold text-base cursor-pointer text-[#030712]"
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
                    className="bg-transparent m-1 rounded-xl flex space-x-5 p-4 font-bold text-base cursor-pointer text-[#030712]"
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
        </div>
      </Layouts>
    </>
  );
};

export default AboutMe;
