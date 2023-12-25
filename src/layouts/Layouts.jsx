import React from "react";
import Navbar from "../components/Fragments/Navbar/Navbar";

const Layouts = ({ children }) => {
  return (
    <>
      <Navbar />

      <main className="px-4 min-h-screen">
        <div className="container mx-auto">{children}</div>
      </main>
    </>
  );
};

export default Layouts;
