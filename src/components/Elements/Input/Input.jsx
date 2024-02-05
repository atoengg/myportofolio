import React from "react";

const Input = ({
  type,
  name,
  value,
  onChange,
  className,
  placeholder,
  label,
}) => {
  return (
    <>
      <div className="relative">
        <input
          required
          type={type ? "type" : type}
          placeholder={placeholder}
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          className={className}
        />
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

export default Input;
