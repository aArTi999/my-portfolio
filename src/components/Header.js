import React, { useState } from "react";
import myImg from "../assets/MyImage.JPG";
import { ImCross } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
const Header = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div
      className={`w-full bg-[#fff] flex flex-col md:flex-row lg:flex-row justify-around lg:justify-between md:justify-between shadow-md fixed top-0 z-50 ease-in duration-200 ${
        isOpen
          ? "lg:h-[15vh] md:h-[15vh] h-1/3"
          : "h-[10vh] lg:h-[15vh] md:h-[15vh]"
      }`}
    >
      <div className="md:w-2/5 lg:w-2/5 flex items-center mx-6 cursor-pointer ">
        <img
          src={myImg}
          className="w-[50px] h-[50px] object-cover rounded-full mx-6"
        />
        <h2 className="text-xl font-bold tracking-wider text-slate-700">
          AARTI SHARMA
        </h2>
        <div className="md:hidden lg:hidden absolute right-4">
          {isOpen ? (
            <ImCross className="text-xl" onClick={() => toggle()} />
          ) : (
            <GiHamburgerMenu className="text-2xl" onClick={() => toggle()} />
          )}
        </div>
      </div>
      <div
        className={`md:w-2/5 lg:w-2/5 flex items-center mx-6 justify-end ${
          isOpen ? "" : "hidden md:flex lg:flex"
        }`}
      >
        <ul className=" w-full list-none flex flex-col md:flex-row lg:flex-row items-end md:items-start lg:items-start gap-3 justify-around text-base font-bold tracking-wider text-slate-700 cursor-pointer divide-y md:divide-none lg:divide-none divide-slate-400  ">
          <a
            href="#home"
            className="w-full md:w-auto lg:w-auto text-right py-1"
          >
            <li className="hover:text-yellow-500 ease-in duration-200">HOME</li>
          </a>
          <a
            href="#about"
            className="w-full md:w-auto lg:w-auto text-right py-1"
          >
            <li className="hover:text-yellow-500 ease-in duration-200">
              ABOUT
            </li>
          </a>
          <a
            href="#projects"
            className="w-full md:w-auto lg:w-auto text-right py-1"
          >
            <li className="hover:text-yellow-500 ease-in duration-200">
              PROJECTS
            </li>
          </a>
          <a
            href="#contact"
            className="w-full md:w-auto lg:w-auto text-right py-1"
          >
            <li className="hover:text-yellow-500 ease-in duration-200">
              CONTACT
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
};
export default Header;
