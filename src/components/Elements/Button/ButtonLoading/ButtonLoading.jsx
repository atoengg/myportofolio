import React from "react";

const ButtonLoading = ({ className, label, disabled }) => {
  return (
    <>
      <button className={className ? className : "btn"} disabled={disabled}>
        <span className="loading loading-spinner"></span>
        {label}
      </button>
    </>
  );
};

export default ButtonLoading;
