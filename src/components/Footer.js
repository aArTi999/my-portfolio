import React from "react";

const Footer = () => {
  return (
    <footer className="w-full min-h-1/3 bg-gray-900 text-white">
      <div className="px-5 py-5 w-1/2">
        <h4 className="font-bold tracking-wider text-2xl">AARTI SHARMA</h4>
        <p className="text-lg my-5">
          A Frontend focused Web Developer building the Frontend of Websites and
          Web Applications that leads to the success of the overall product
        </p>
      </div>

      <hr />
      <div className="p-2">
        <p className="text-center my-3">
          &copy; Copyright {new Date().getFullYear()}
          <span className="font-semibold "> Made by AARTI SHARMA</span>
        </p>
      </div>
    </footer>
  );
};
export default Footer;
