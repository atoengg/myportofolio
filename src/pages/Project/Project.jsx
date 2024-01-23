import React, { useEffect, useState } from "react";
import Layouts from "../../layouts/Layouts";
import { BsGlobe, BsPhoneFill } from "react-icons/bs";
import CatagoryTech from "../../components/Elements/CatagoryTech/CatagoryTech";
import CardProjectLeft from "../../components/Fragments/CardProject/CardProjectLeft";
import CardProjectRight from "../../components/Fragments/CardProject/CardProjectRight";
import { dataProjects } from "../../components/DataComponents/DataComponents";

const Project = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredProjects(dataProjects);
    } else {
      const filtered = dataProjects.filter((project) =>
        project.categories.includes(selectedCategory)
      );
      setFilteredProjects(filtered);
    }
  }, [selectedCategory, dataProjects]);

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
              <button onClick={() => setSelectedCategory("All")}>
                <div
                  className={`rounded-full py-1 px-4 border border-[#030712] ${
                    selectedCategory === "All"
                      ? "text-white bg-[#030712]"
                      : "text-[#030712] bg-transparent"
                  } transition duration-300 ease-in-out hover:bg-[#030712] hover:text-white `}
                >
                  <p>All</p>
                </div>
              </button>
              <button onClick={() => setSelectedCategory("Web")}>
                <div
                  className={`flex justify-center items-center rounded-full py-1 px-4 border border-[#030712] ${
                    selectedCategory === "Web"
                      ? "text-white bg-[#030712]"
                      : "text-[#030712] bg-transparent"
                  }  transition duration-300 ease-in-out hover:bg-[#030712] hover:text-white`}
                >
                  <BsGlobe />
                  <p className="ml-1">Web</p>
                </div>
              </button>
              <button onClick={() => setSelectedCategory("Android")}>
                <div
                  className={`flex justify-center items-center rounded-full py-1 px-4 border border-[#030712] ${
                    selectedCategory === "Android"
                      ? "text-white bg-[#030712]"
                      : "text-[#030712] bg-transparent"
                  }  transition duration-300 ease-in-out hover:bg-[#030712] hover:text-white`}
                >
                  <BsPhoneFill />
                  <p className="ml-1">Android</p>
                </div>
              </button>
            </div>

            {filteredProjects.map(
              (project, index) =>
                project.categories.length > 0 &&
                (project.categories.includes(selectedCategory) ||
                selectedCategory === "All" ? (
                  index % 2 === 0 ? (
                    <CardProjectLeft key={index} {...project}>
                      {project.categories.map((category, i) => (
                        <CatagoryTech key={i} title={category} />
                      ))}
                    </CardProjectLeft>
                  ) : (
                    <CardProjectRight key={index} {...project}>
                      {project.categories.map((category, i) => (
                        <CatagoryTech key={i} title={category} />
                      ))}
                    </CardProjectRight>
                  )
                ) : null)
            )}

            {/* <CardProjectLeft
              img={bannerEmpathiCare}
              title={"EmpathiCare"}
              description={
                "EmpathiCare adalah aplikasi yang bertujuan membantu pengguna mengelola stres dan kecemasan. Aplikasi ini memungkinkan pengguna untuk berinteraksi dengan psikolog atau spesialis kesehatan mental, serta memberikan akses ke informasi kesehatan mental yang berguna."
              }
              linkGit={"https://github.com/Capstone-Mental-Health-Care-Group-6"}
              linkWeb={"https://empathicare-two.vercel.app/"}
            >
              <CatagoryTech title={"React"} />
              <CatagoryTech title={"Bootstrap"} />
              <CatagoryTech title={"Golang"} />
              <CatagoryTech title={"Flutter"} />
              <CatagoryTech title={"Figma"} />
              <CatagoryTech title={"API"} />
              <CatagoryTech title={"Postman"} />
              <CatagoryTech title={"GIT"} />
              <CatagoryTech title={"Github"} />
              <CatagoryTech title={"TeamWork"} />
              <CatagoryTech title={"Vite"} />
              <CatagoryTech title={"NodeJS"} />
            </CardProjectLeft>

            <CardProjectRight
              img={bannerHolaaDelivery}
              title={"Holaa-Delivery"}
              linkGit={"https://github.com/atoengg/holaa-delivery"}
              linkWeb={"https://holaa-delivery.vercel.app/"}
              description={
                "Holaa-delivery merupakan sebuah aplikasi website delivery makanan dan minuman di tempat cafe yang berada di Dalegan, Panceng, Gresik. aplikasi ini dibuat dengan tujuan untuk menyediakan layanan pengiriman makanan dan minuman kepada pelanggan dengan lebih mudah dan efisien."
              }
            >
              <CatagoryTech title={"React"} />
              <CatagoryTech title={"Redux"} />
              <CatagoryTech title={"RestApi"} />
              <CatagoryTech title={"TailwindCss"} />
              <CatagoryTech title={"GIT"} />
              <CatagoryTech title={"Postman"} />
              <CatagoryTech title={"Firebase"} />
              <CatagoryTech title={"Vite"} />
              <CatagoryTech title={"NodeJS"} />
            </CardProjectRight>

            <CardProjectLeft
              img={bannerAppTourSby}
              title={"AppTourSurabaya"}
              description={
                "AppTourSurabaya merupakan aplikasi berbasis Android yang berisi informasi dan informasi objek wisata Lokasi objek wisata ini berada di kota Surabaya yang dilengkapi dengan fasilitas lengkap dengan gambar. Diharapkan aplikasi ini dapat menjadi panduan bagi pengguna dalam mencari lokasi terkait pariwisata di kota surabaya."
              }
              linkGit={"https://github.com/atoengg/AppTourSurabaya"}
            >
              <CatagoryTech title={"Kotlin"} />
              <CatagoryTech title={"Firebase"} />
              <CatagoryTech title={"TeamWork"} />
              <CatagoryTech title={"GIT"} />
              <CatagoryTech title={"Github"} />
            </CardProjectLeft>

            <CardProjectRight
              img={bannerUtmClean}
              title={"UTM Clean"}
              description={
                "UTM Clean merupakan sebuah platflom landing page yang bergerak dalam bidang jasa khususnya pada perawatan sepatu seperti mencuci, repaint, dan treatment."
              }
              linkGit={"https://github.com/atoengg/utmCleanShoes.github.io"}
              linkWeb={"https://utm-clean-shoes.vercel.app/"}
            >
              <CatagoryTech title={"HTML"} />
              <CatagoryTech title={"TailwindCss"} />
              <CatagoryTech title={"Javascript"} />
              <CatagoryTech title={"Aos"} />
            </CardProjectRight> */}
          </div>
        </section>
      </Layouts>
    </div>
  );
};

export default Project;
