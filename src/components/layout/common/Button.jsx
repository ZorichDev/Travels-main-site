import React from 'react';

const Button = ({ children, variant = 'primary', onClick, className = '', ...props }) => {
  const baseStyles = "px-8 py-4 rounded font-bold uppercase tracking-wide transition transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-bg-[#ff0909]-600 hover:bg-bg-[#ff0909]-700 text-white shadow-lg hover:shadow-bg-[#ff0909]-600/30",
    outline: "border border-white/40 hover:border-bg-[#ff0909]-600 text-white/90 hover:text-bg-[#ff0909]-600",
    secondary: "bg-navy-800 hover:bg-navy-700 text-white"
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;