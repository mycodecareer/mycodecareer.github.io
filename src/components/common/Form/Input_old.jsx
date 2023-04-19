import React from "react";

let baseStyle =
  "w-full rounded-md p-2 bg-accent focus:ring focus:ring-opacity-75 focus:ring-secondary";

const Input_old = ({
  type,
  name,
  label,
  placeholder,
  onChange,
  messageField = false,
}) => {
  if (messageField) {
    return (
      <div className="col-span-full sm:col-span-6">
        <label htmlFor={name} className="text-sm md:text-lg">
          {label}
        </label>
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          cols="30"
          rows="10"
          className={`${baseStyle} col-span-full resize-none`}
        />
      </div>
    );
  } else {
    return (
      <div className="col-span-full sm:col-span-6">
        <label htmlFor={name} className="text-sm md:text-lg">
          {label}
        </label>
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          className={baseStyle}
        />
      </div>
    );
  }
};

export default Input_old;
