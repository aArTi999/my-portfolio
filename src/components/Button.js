import React from "react";

const Button = ({ title, onClick }) => (
  <button
    className="pt-3 pb-3 pl-10 pr-10 bg-yellow-500 rounded-lg mt-10 font-bold tracking-wider uppercase hover:translate-y-[-0.2rem] transition-all"
    onClick={onClick}
  >
    {title}
  </button>
);

export default Button;
