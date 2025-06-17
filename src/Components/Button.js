// src/components/Button.js
import React from 'react';

const Button = ({ children, onClick, className = '', type = 'button', disabled = false }) => {
  const baseClasses = `
    inline-block
    px-5 py-2
    text-white
    bg-blue-600
    text-base font-medium
    rounded-md
    shadow-md
    transition
    transform
    hover:bg-blue-700
    active:bg-blue-800
    hover:-translate-y-1
    active:translate-y-0
    disabled:bg-gray-400
    disabled:cursor-not-allowed
    disabled:shadow-none
    w-full sm:w-auto
  `;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
