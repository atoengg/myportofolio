import React from "react";

const TextArea = ({ value, onChange, name, placeholder, label, className }) => {
  return (
    <>
      <div className="relative">
        <textarea
          required
          value={value}
          onChange={onChange}
          className={className}
          name={name}
          id={name}
          placeholder={placeholder}
          rows="6"
        ></textarea>
        <label
          htmlFor={name}
          className="absolute left-2 -top-2.5 text-[#9ca3af] text-sm px-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#9ca3af] peer-placeholder-shown:top-2 peer-focus:text-[#030712] peer-focus:bg-white transition-all duration-200"
        >
          {label}
        </label>
      </div>
    </>
  );
};

export default TextArea;
