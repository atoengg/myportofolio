import React from "react";
import Layouts from "../../layouts/Layouts";
import { BsGlobe, BsPhoneFill } from "react-icons/bs";
import { bannerEmpathiCare, bannerHolaaDelivery } from "../../../image";
import CardProject from "../../components/Fragments/CardProject/CardProject";

const Project = () => {
  return (
    <div>
      <Layouts>
        <section className="py-20">
          <div className="container">
            <div className="text-center">
              <h4 className="font-bold uppercase text-[#030712] text-2xl mb-3">
                {">_ My Project"}
              </h4>
              <p className="text-[#030712] text-sm">
                Some projects I have built:
              </p>
            </div>
            <div className="flex items-center my-6 justify-center gap-4">
              <button>
                <div className="rounded-full py-1 px-4 border border-slate-400 text-white bg-[#030712]">
                  <p>All</p>
                </div>
              </button>
              <button>
                <div className="flex justify-center items-center rounded-full py-1 px-4 border border-[#030712] text-[#030712] bg-transparent transition duration-200 ease-in-out hover:bg-[#030712] hover:text-white">
                  <BsGlobe />
                  <p className="ml-1">Web</p>
                </div>
              </button>
              <button>
                <div className="flex justify-center items-center rounded-full py-1 px-4 border border-[#030712] text-[#030712] bg-transparent transition duration-200 ease-in-out hover:bg-[#030712] hover:text-white">
                  <BsPhoneFill />
                  <p className="ml-1">Android</p>
                </div>
              </button>
            </div>

            <CardProject
              img={bannerEmpathiCare}
              title={"EmpathiCare"}
              description={
                "EmpathiCare adalah aplikasi yang bertujuan membantu pengguna mengelola stres dan kecemasan. Aplikasi ini memungkinkan pengguna untuk berinteraksi dengan psikolog atau spesialis kesehatan mental, serta memberikan akses ke informasi kesehatan mental yang berguna"
              }
              linkGit={"https://github.com/Capstone-Mental-Health-Care-Group-6"}
              linkWeb={"https://empathicare-two.vercel.app/"}
            />

            <CardProject
              img={bannerHolaaDelivery}
              title={"Holaa-Delivery"}
              catagory={"React"}
            />
          </div>
        </section>
      </Layouts>
    </div>
  );
};

export default Project;
