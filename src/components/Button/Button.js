import React from "react";

function Button({primary = false, className = "", ...otherProps}) {
  const cx = primary ? 'bg-blue-800 text-white' : 'bg-gray-100 text-black';
  return <button className={`${cx} rounded-lg px-4 py-2 ${className}`} {...otherProps}/>;
}

export default Button;
