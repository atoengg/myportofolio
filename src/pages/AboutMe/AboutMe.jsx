import React from "react";
import Layouts from "../../layouts/Layouts";
import {
  gif,
  imgLeadFrontend,
  imgPelcode,
  imgTeamIT,
  imgWarlab,
  mee,
} from "../../../image";
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

          <section className="container my-10">
            <div className="text-center">
              <h4 className="font-bold uppercase text-[#030712] text-xl mb-3">
                {">_ My Experience"}
              </h4>
              <p className="text-[#030712] text-sm">
                Here is a quick summary of my most recent experiences:
              </p>
            </div>

            <div className="mt-8">
              <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                <li>
                  <div className="timeline-middle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="timeline-start mb-10 bg-white rounded-md shadow-md p-4">
                    <div className="md:text-end">
                      <time className="font-mono italic ">
                        Jan 2021 - Feb 2021
                      </time>
                    </div>
                    <div className="text-lg text-[#030712] font-bold flex flex-col md:text-end">
                      IT Team{" "}
                      <span className="text-xs font-normal text-[#4b5563] italic ">
                        Campus Expo ~ MAN 1 GRESIK
                      </span>
                    </div>

                    <div className="my-2">
                      <img
                        src={imgTeamIT}
                        alt="image-team-IT"
                        className="rounded-md"
                      />

                      <ul className="text-[15px] px-4 mt-2">
                        <li className="list-disc">
                          technical preparation and setup.
                        </li>
                        <li className="list-disc">
                          expo website or application management.{" "}
                        </li>
                        <li className="list-disc">
                          creation and maintenance of digital materials: such as
                          multimedia presentations, promotional vidios, and
                          promotional materials to be displayed on screens or
                          monitors.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <hr />
                </li>
                <li>
                  <div className="timeline-middle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="timeline-end mb-10 bg-white rounded-md shadow-md p-4">
                    <time className="font-mono italic">Mar 2022 - present</time>
                    <div className="flex flex-col text-lg text-[#030712] font-bold">
                      Laboratory Assistant{" "}
                      <span className="text-xs font-normal text-[#4b5563] italic ">
                        Warga Lab ~ Trunojoyo Madura University
                      </span>
                    </div>

                    <div className="my-2">
                      <img
                        src={imgWarlab}
                        alt="image-Warlab"
                        className="rounded-md"
                      />

                      <ul className="text-[15px] px-4 mt-2">
                        <li className="list-disc">
                          deliver material in practicum in accordance with the
                          module.
                        </li>
                        <li className="list-disc">
                          Delivering projects to practice.
                        </li>
                        <li className="list-disc">
                          Providing guidance and support .
                        </li>
                        <li className="list-disc">
                          Administrative tasks: Administrative duties may be
                          assigned to the assistant, such as managing inventory,
                          ordering supplies, or maintaining records related to
                          the laboratory activities.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <hr />
                </li>

                <li>
                  <hr />
                  <div className="timeline-middle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="timeline-start mb-10 bg-white rounded-md shadow-md p-4">
                    <div className="md:text-end">
                      <time className="font-mono italic">Sep 2022</time>
                    </div>
                    <div className="flex flex-col text-lg text-[#030712] font-bold md:text-end">
                      Coding Training{" "}
                      <span className="text-xs font-normal text-[#4b5563] italic ">
                        Speaker ~ Trunojoyo Madura University
                      </span>
                    </div>
                    <div className="my-2">
                      <img
                        src={imgPelcode}
                        alt="image-Pelcode"
                        className="rounded-md"
                      />

                      <ul className="text-[15px] px-4 mt-2">
                        <li className="list-disc">
                          Preparing the material: The speaker needs to prepare
                          comprehensive and structured material on the basics of
                          Python. This includes covering fundamental concepts,
                          syntax, data types, variables, operators, flow
                          control, data structures, and basic functions in the
                          Python programming language.
                        </li>
                        <li className="list-disc">
                          Providing examples and demonstrations
                        </li>
                        <li className="list-disc">
                          assigning programming tasks using Python. This
                          promotes active participation and deepens participants
                          understanding.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <hr />
                </li>
                <li>
                  <hr />
                  <div className="timeline-middle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="timeline-end mb-10 bg-white rounded-md shadow-md p-4">
                    <time className="font-mono italic">
                      Nov 2023 - Dec 2023
                    </time>
                    <div className="flex flex-col text-lg text-[#030712] font-bold">
                      Team Lead Frontend{" "}
                      <span className="text-xs font-normal text-[#4b5563] italic">
                        Capstone Project ~ Alterra Academy
                      </span>
                    </div>
                    <div className="my-2">
                      <img
                        src={imgLeadFrontend}
                        alt="image-lead-frontend"
                        className="rounded-md"
                      />

                      <ul className="text-[15px] px-4 mt-2">
                        <li className="list-disc">
                          divide tasks to each member of the frontend division.
                        </li>
                        <li className="list-disc">
                          Code review, managing conflicts, merging code from
                          branch 1 with other branches.
                        </li>
                        <li className="list-disc">
                          follow up with each member regarding the text, become
                          a bridge to other divisions when there are complaints
                          from team members.
                        </li>
                        <li className="list-disc">
                          provide assessments to team members.
                        </li>
                        <li className="list-disc">
                          Provide progress reports on capstone project work to
                          PM and mentors every time there is a class.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <hr />
                </li>
              </ul>
            </div>
          </section>
        </div>
      </Layouts>
    </>
  );
};

export default AboutMe;
