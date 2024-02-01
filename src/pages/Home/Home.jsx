import React from "react";
import Layouts from "../../layouts/Layouts";
import { imgHero } from "../../../image";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import ButtonLink from "../../components/Elements/Button/ButtonLink/ButtonLink";
import resume from "../../assets/pdf/CV_Mohammad Irham alkarim.pdf";
import { BsDownload, BsFileEarmarkArrowDownFill } from "react-icons/bs";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  const [typeAnimation] = useTypewriter({
    words: ["Atoengg🙌", "Student", "FrontEnd Dev"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 80,
  });

  return (
    <div>
      <Layouts>
        <section className="lg:min-h-screen py-20">
          <div className="hero container ">
            <div className="hero-content flex flex-col lg:flex-row-reverse">
              <div className=" ">
                <img
                  src={imgHero}
                  className="max-w-full mx-auto md:w-60 lg:w-80"
                />
              </div>
              <div className="w-full self-center p-4">
                <h1 className="text-3xl font-bold md:text-5xl ">
                  {t("greeting")} {typeAnimation} <Cursor cursorStyle="|" />
                </h1>
                <p className="py-6 text-base leading-normal text-justify lg:text-left">
                  {t("introduction")}
                </p>
                <ButtonLink
                  text={"Download CV"}
                  href={resume}
                  download={"CV_Mohammad Irham alkarim.pdf"}
                  className={
                    "btn px-8 py-3 items-center text-base font-semibold  rounded-full hover:shadow-lg hover:transition hover:duration-200 hover:ease-in-out"
                  }
                  icon={<BsFileEarmarkArrowDownFill size={20} />}
                />
              </div>
            </div>
          </div>
        </section>
      </Layouts>
    </div>
  );
};

export default Home;
