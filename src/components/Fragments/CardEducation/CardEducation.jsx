import React, { useEffect } from "react";
import { BsMortarboardFill } from "react-icons/bs";
import AOS from "aos";

const CardEducation = ({
  children,
  time,
  logo,
  title,
  study,
  className,
  svgColor,
}) => {
  useEffect(() => {
    AOS.init({
      once: false,
    });
  });
  return (
    <>
      <div
        className="timeline-middle"
        data-aos="fade-in"
        data-aos-duration="2000"
      >
        <BsMortarboardFill
          size={30}
          className={`${svgColor ? "text-primary" : svgColor}`}
        />
      </div>
      <div
        className={` ${className ? className : "timeline-end ml-3"}`}
        data-aos="fade-left"
        data-aos-duration="2000"
        data-aos-delay="1500"
      >
        <div className="flex items-center gap-2">
          <img src={logo} alt={logo} className="w-12 h-w-12" />
          <div className="">
            <div className="timeline-start">{time}</div>

            <h1 className="font-bold text-xl">{title}</h1>
          </div>
        </div>
        <p className="font-light text-base mt-2">{study}</p>
        <ul className="text-[15px] px-4 mt-3">{children}</ul>
      </div>
    </>
  );
};

export default CardEducation;
