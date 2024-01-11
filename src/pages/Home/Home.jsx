import React from "react";
import Layouts from "../../layouts/Layouts";
import { imgHero } from "../../../image";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import ButtonLink from "../../components/Elements/Button/ButtonLink/ButtonLink";
import resume from "../../assets/pdf/CV_Mohammad Irham alkarim.pdf";
import { BsDownload, BsFileEarmarkArrowDownFill } from "react-icons/bs";

const Home = () => {
  const [typeAnimation] = useTypewriter({
    words: ["Atoengg🙌", "Student", "FrontEnd Dev"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 80,
  });

  return (
    <div>
      <Layouts>
        <section>
          <div className="hero container min-h-screen ">
            <div className="hero-content flex flex-col lg:flex-row-reverse ">
              <div className=" ">
                <img
                  src={imgHero}
                  className="max-w-full mx-auto md:w-60 lg:w-80"
                />
              </div>
              <div className="w-full self-center p-4">
                <h1 className="text-5xl font-bold text-[#030712]">
                  Hi, I'm {typeAnimation} <Cursor cursorStyle="|" />
                </h1>
                <p className="py-6 text-base leading-normal">
                  I am a 7th semester information systems student at Trunojoyo
                  University with an interest in web development. I've honed my
                  skills in HTML, CSS, and JavaScript, and I've learned advanced
                  JavaScript frameworks like React.js to create dynamic web
                  applications. I am committed to staying up to date with the
                  latest technology developments to continue pushing the
                  boundaries of web development.
                </p>
                <ButtonLink
                  text={"Download CV"}
                  href={resume}
                  download={"CV_Mohammad Irham alkarim.pdf"}
                  className={
                    "btn px-8 py-3 items-center text-base font-semibold text-white bg-info-content rounded-full hover:shadow-lg hover:transition hover:duration-200 hover:ease-in-out"
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
