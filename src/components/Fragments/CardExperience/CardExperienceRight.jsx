import React from "react";

const CardExperienceRight = ({
  time,
  title,
  subTitle,
  img,
  children,
  onClick,
}) => {
  return (
    <>
      <div className="timeline-middle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className="timeline-end mb-10 rounded-md shadow-md p-4 ">
        <time className="font-mono italic">{time}</time>
        <div className="flex flex-col text-lg font-bold">
          {title}
          <span className="text-xs font-normal text-[#4b5563] italic ">
            {subTitle}
          </span>
        </div>
        <div className="my-2">
          <img
            onClick={onClick}
            src={img}
            alt="image-Pelcode"
            className="rounded-md hover:cursor-zoom-in"
          />

          <ul className="text-[15px] px-4 mt-2">{children}</ul>
        </div>
      </div>
    </>
  );
};

export default CardExperienceRight;
