import React from "react";
import Navbar from "../components/Fragments/Navbar/Navbar";
import ScrollToTop from "react-scroll-to-top";
import { BsRocketFill } from "react-icons/bs";

const Layouts = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="">
        <div className="container mx-auto">{children}</div>
        <ScrollToTop
          top={200}
          smooth
          component={<BsRocketFill size={25} color="#d1d5db" />}
          style={{
            backgroundColor: "#111827",
            borderRadius: "100%",
            width: "60px",
            height: "60px",
          }}
          className="flex items-center justify-center top-[84%]"
        />
      </main>
    </>
  );
};

export default Layouts;
