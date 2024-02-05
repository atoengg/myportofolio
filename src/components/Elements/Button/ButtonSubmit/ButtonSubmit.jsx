import React from "react";

const ButtonSubmit = ({ className, name, label, disabled }) => {
  return (
    <>
      <button
        type="submit"
        className={className ? className : "btn"}
        name={name}
        id={name}
        disabled={disabled}
      >
        {label}
      </button>
    </>
  );
};

export default ButtonSubmit;
