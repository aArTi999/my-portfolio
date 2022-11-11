import React from "react";

const Footer = () => {
  return (
    <footer className="w-full min-h-1/3 bg-gray-900 text-white">
      <div className="px-5 py-5 w-full md:w-1/2 lg:w-1/2">
        <h4 className="font-bold tracking-wider text-2xl text-center md:text-left lg:text-left">
          AARTI SHARMA
        </h4>
        <p className="text-lg my-5">
          A goal oriented, determined and ambitious person with a passion for
          Technology. I enjoy working collaboratively but can also work
          independently.
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
