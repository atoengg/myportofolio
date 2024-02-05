import React, { useEffect, useState } from "react";
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
import { BsX } from "react-icons/bs";
import { dataSkills } from "../../components/DataComponents/DataComponents";
import { useTranslation } from "react-i18next";
import CardExperienceLeft from "../../components/Fragments/CardExperience/CardExperienceLeft";
import ListDescExperience from "../../components/Elements/ListDescExperience/ListDescExperience";
import CardExperienceRight from "../../components/Fragments/CardExperience/CardExperienceRight";

const AboutMe = () => {
  const { t } = useTranslation();

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Layouts>
        <div className="py-20">
          <section className="container">
            <h4 className="font-bold uppercase text-2xl mb-3">
              {t("aboutme")}
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
                  {t("titleDescription")}
                </h3>
                <div>
                  <p className="text-sm leading-relaxed">
                    {t("descriptionMe1")}
                  </p>

                  <p className="text-sm leading-relaxed my-2">
                    {t("descriptionMe2")}
                  </p>

                  <p className="text-sm leading-relaxed my-2">
                    {t("descriptionMe3")}
                  </p>

                  <p className="text-sm leading-relaxed mt-2">
                    {t("descriptionMe4")}
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="container my-10">
            <div className="text-center">
              <h4 className="font-bold uppercase text-2xl mb-3">
                {t("mySkills")}
              </h4>
              <p className="text-sm">{t("subtitleMySkills")}</p>

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
                {t("myExperience")}
              </h4>
              <p className="text-sm">{t("subtitleMyExperience")}</p>
            </div>

            <div className="mt-8">
              <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                <li>
                  <hr />
                  <CardExperienceLeft
                    time={"Nov 2023 - Dec 2023"}
                    title={t("experience1")}
                    subTitle={"Capstone Project ~ Alterra Academy"}
                    img={imgLeadFrontend}
                    onClick={() => handleImageClick(imgLeadFrontend)}
                  >
                    <ListDescExperience description={t("descExpLead1")} />
                    <ListDescExperience description={t("descExpLead2")} />
                    <ListDescExperience description={t("descExpLead3")} />
                    <ListDescExperience description={t("descExpLead4")} />
                    <ListDescExperience description={t("descExpLead5")} />
                  </CardExperienceLeft>
                  <hr />
                </li>
                <li>
                  <hr />
                  <CardExperienceRight
                    title={t("experience2")}
                    subTitle={"Speaker ~ Trunojoyo Madura University"}
                    time={"Sep 2022"}
                    img={imgPelcode}
                    onClick={() => handleImageClick(imgPelcode)}
                  >
                    <ListDescExperience description={t("descExpPelcode1")} />
                    <ListDescExperience description={t("descExpPelcode2")} />
                    <ListDescExperience description={t("descExpPelcode3")} />
                  </CardExperienceRight>
                  <hr />
                </li>
                <li>
                  <hr />
                  <CardExperienceLeft
                    time={"Mar 2022 - present"}
                    title={t("experience3")}
                    subTitle={"Warga Lab ~ Trunojoyo Madura University"}
                    img={imgWarlab}
                    onClick={() => handleImageClick(imgWarlab)}
                  >
                    <ListDescExperience description={t("descExpLab1")} />
                    <ListDescExperience description={t("descExpLab2")} />
                    <ListDescExperience description={t("descExpLab3")} />
                    <ListDescExperience description={t("descExpLab4")} />
                  </CardExperienceLeft>
                  <hr />
                </li>
                <li>
                  <hr />
                  <CardExperienceRight
                    title={t("experience4")}
                    subTitle={"Campus Expo ~ MAN 1 GRESIK"}
                    time={"Jan 2021 - Feb 2021"}
                    img={imgTeamIT}
                    onClick={() => handleImageClick(imgTeamIT)}
                  >
                    <ListDescExperience description={t("descExpIt1")} />
                    <ListDescExperience description={t("descExpIt2")} />
                  </CardExperienceRight>
                  <hr />
                </li>
              </ul>
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
                className="absolute top-2 right-2 text-white active:text-[#030712] hover:bg-[#9ca3af] rounded-md"
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
