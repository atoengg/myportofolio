import React, { useEffect } from "react";
import { BsGithub, BsGlobe } from "react-icons/bs";
import { Link } from "react-router-dom";
import AOS from "aos";

const CardProjectLeft = ({
  img,
  title,
  description,
  linkGit,
  linkWeb,
  children,
}) => {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 1000,
      easing: "ease-in-out",
    });
  });

  return (
    <>
      <div
        className="flex flex-col shadow-md rounded-md my-6 lg:flex-row"
        data-aos="fade-up"
      >
        <div className="lg:w-1/2 bg-[#F9FAFB] p-4 lg:p-8">
          <img src={img} alt={img} className="rounded-md shadow-md" />
        </div>
        <div className="lg:w-1/2 p-4 lg:p-8">
          <h2 className="font-semibold text-xl text-[#111827] mb-3">{title}</h2>
          <p className="text-base text-[#4B5563] mb-6">{description}</p>

          <div className="grid grid-cols-3 lg:grid-cols-4 gap-4">
            {children}
          </div>

          <div className="mt-5 flex flex-row gap-4">
            <Link to={linkGit}>
              <BsGithub size={25} />
            </Link>
            <Link to={linkWeb}>
              <BsGlobe size={25} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardProjectLeft;
