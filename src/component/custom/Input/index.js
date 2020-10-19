import React from "react";

export default ({
  callback,
  className,
  type = "text",
  disabled = false,
  readOnly = false,
  placeholder = "",
}) => {
  return (
    <input
      type={type}
      disabled={disabled}
      readOnly={readOnly}
      className={className}
      placeholder={placeholder}
      onChange={({ target: { value } }) => callback(value)}
    />
  );
};
