import React from "react";

const Button = ({ label, onClick, variant = "primary" }) => {
  const baseStyles = "w-full py-2 rounded text-center font-medium";
  const variantStyles =
    variant === "primary"
      ? "bg-blue-500 hover:bg-blue-600 text-white"
      : "bg-gray-700 hover:bg-gray-600 text-gray-200";

  return (
    <button className={`${baseStyles} ${variantStyles}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
