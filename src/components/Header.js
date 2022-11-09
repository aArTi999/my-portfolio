import React from "react";
import myImg from "../assets/MyImage.JPG";
const Header = () => {
  return (
    <div className="w-full h-[16vh] bg-[#fff] flex justify-between shadow-md fixed top-0 z-50">
      <div className=" w-2/5 flex  items-center  mx-6 cursor-pointer ">
        <img
          src={myImg}
          className="w-[50px] h-[50px] object-cover rounded-full mx-6"
        />
        <h2 className="text-xl font-bold tracking-wider text-slate-700">
          AARTI SHARMA
        </h2>
      </div>
      <div className="w-2/5 flex  items-center mx-6 justify-end">
        <ul className=" w-full list-none flex justify-around text-base font-bold tracking-wider text-slate-700 cursor-pointer   ">
          <li>HOME</li>
          <li>ABOUT</li>
          <li>PROJECTS</li>
          <li>CONTACT</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
