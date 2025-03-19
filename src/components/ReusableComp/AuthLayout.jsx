import React from "react";

const AuthLayout = ({ children, heading }) => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 flex items-center justify-center">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded shadow-lg">
        <h1 className="text-2xl font-bold text-center">{heading}</h1>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
