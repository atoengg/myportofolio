import React from "react";
import { Link } from "react-router-dom";

const SocialMedia = ({ location, children }) => {
  return (
    <>
      <Link to={location}>
        <div className="flex justify-center items-center mr-3 w-9 h-9 text-[#9ca3af] border rounded-full border-[#9ca3af] transition duration-300 ease-in-out hover:bg-[#030712] hover:text-white">
          {children}
        </div>
      </Link>
    </>
  );
};

export default SocialMedia;
