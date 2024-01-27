import React from "react";

const ButtonSubmit = ({ className, name, label }) => {
  return (
    <>
      <button
        type="submit"
        className={className ? className : "btn"}
        name={name}
        id={name}
      >
        {label}
      </button>
    </>
  );
};

export default ButtonSubmit;
