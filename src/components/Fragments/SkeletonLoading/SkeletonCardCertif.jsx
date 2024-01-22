import React from "react";

const SkeletonCardCertif = ({ certificate }) => {
  return Array(certificate)
    .fill(0)
    .map((item, index) => (
      <div className="flex flex-col gap-4 w-90%" key={index}>
        <div className="skeleton h-60 w-full"></div>
        <div className="skeleton h-6 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="card-actions justify-end">
          <div className="skeleton h-4 w-20"></div>
          <div className="skeleton h-4 w-20"></div>
        </div>
      </div>
    ));
};

export default SkeletonCardCertif;
