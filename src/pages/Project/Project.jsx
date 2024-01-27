import React, { useEffect, useState } from "react";
import Layouts from "../../layouts/Layouts";
import { BsGlobe, BsPhoneFill } from "react-icons/bs";
import CatagoryTech from "../../components/Elements/CatagoryTech/CatagoryTech";
import CardProjectLeft from "../../components/Fragments/CardProject/CardProjectLeft";
import CardProjectRight from "../../components/Fragments/CardProject/CardProjectRight";
import { dataProjects } from "../../components/DataComponents/DataComponents";
import AOS from "aos";

const Project = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    AOS.init({
      once: false,
      duration: 1000,
      easing: "ease-in-out",
      delay: 300,
    });
  });

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
            <div className="text-center" data-aos="fade-down">
              <h4 className="font-bold uppercase text-[#030712] text-2xl mb-3">
                {">_ My Project"}
              </h4>
              <p className="text-[#030712] text-sm">
                Some projects I have built:
              </p>
            </div>
            <div
              className="flex items-center my-6 justify-center gap-4"
              data-aos="fade-down"
            >
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
          </div>
        </section>
      </Layouts>
    </div>
  );
};

export default Project;
