import React, { useEffect, useState } from "react";
import { iconBar } from "../../../../image";

const SplashLoading = ({ onFinished }) => {
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsFinished(true);
      if (onFinished) {
        onFinished();
      }
    }, 3000);

    return () => clearTimeout(timeout);
  }, [onFinished]);

  if (isFinished) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 grid place-items-center w-full h-full">
      <div className="flex-col gap-4 w-full flex items-center justify-center">
        <div className="w-28 h-28 border-8 text-blue-400 text-4xl animate-spin border-gray-300 flex items-center justify-center border-t-blue-400 rounded-full">
          <img
            src={iconBar}
            alt="icon-atoengg"
            className="animate-ping h-[1em] w-[1em] rounded-full fill-current"
          />
        </div>
        <p className="font-semibold">Loading...</p>
      </div>
    </div>
  );
};

export default SplashLoading;
