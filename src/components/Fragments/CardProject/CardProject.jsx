import React from "react";
import CatagoryTech from "../../Elements/CatagoryTech/CatagoryTech";
import { BsGithub, BsGlobe } from "react-icons/bs";
import { Link } from "react-router-dom";

const CardProject = ({
  img,
  title,
  description,
  linkGit,
  linkWeb,
  catagory,
}) => {
  return (
    <>
      <div className="flex shadow-md rounded-md my-6">
        <div className="w-1/2 bg-[#F9FAFB] p-8">
          <img src={img} alt={img} className="rounded-md shadow-md" />
        </div>
        <div className="w-1/2 p-8">
          <h2 className="font-semibold text-xl text-[#111827] mb-3">{title}</h2>
          <p className="text-base text-[#4B5563] mb-6">{description}</p>

          <div className="grid grid-cols-4 gap-4">
            <CatagoryTech title={catagory} />
            <CatagoryTech title={"Bootstrap"} />
            <CatagoryTech title={"Golang"} />
            <CatagoryTech title={"Flutter"} />
            <CatagoryTech title={"Figma"} />
            <CatagoryTech title={"API"} />
            <CatagoryTech title={"Postman"} />
            <CatagoryTech title={"GIT"} />
            <CatagoryTech title={"Github"} />
            <CatagoryTech title={"TeamWork"} />
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

export default CardProject;
