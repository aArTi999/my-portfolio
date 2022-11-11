import React from "react";
import { skills } from "../data";
import Heading from "./Heading";
import Button from "./Button";

const About = () => {
  return (
    <section
      id="about"
      className="w-full min-h-screen bg-[#F6F6FF] bg-gradient-to-t from-stone-200 p-4"
    >
      <div className="flex flex-col justify-center items-center">
        <Heading title={"About Me"} />
        <p className="text-xl w-2/3 text-center mt-5 ">
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology.
        </p>
        <div className="flex flex-col md:flex-row lg:flex-row justify-between">
          <div className="w-full md:w-1/2 lg:w-1/2 md:p-10 lg:p-10 p-7">
            <h3 className="text-2xl font-bold text-center ">Get to know me</h3>
            <p className="my-4 leading-7 text-justify text-lg">
              I'm a{" "}
              <span className="font-semibold text-slate-900">
                Software Engineer
              </span>{" "}
              building the Front-end of Websites and Web Applications that leads
              to the success of the overall product. Check out some of my work
              in the Projects section.
            </p>
            <p className="my-4 leading-7 text-justify text-lg">
              Feel free to Connect or Follow me on my{" "}
              <a href="https://github.com/aArTi999/" target="_blank">
                <span className="font-semibold text-slate-900 underline cursor-pointer ">
                  Github
                </span>
              </a>{" "}
              where I build projects related to Web Development and Programming.
            </p>
            <p className="my-4 leading-7 text-justify text-lg">
              I'm open to Job opportunities where I can contribute, learn and
              grow. If you have a good opportunity that matches my skills and
              experience then don't hesitate to contact me.
            </p>
            <div className="text-center md:text-left lg:text-left">
              <a href="#contact">
                <Button title={"contact"} />
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/2 md:p-10 lg:p-10">
            <h3 className="text-2xl font-bold text-center">My Skills</h3>
            <div className="w-full p-2 flex flex-wrap mt-4 gap-2 lg:gap-4 md:gap-4 ">
              {skills.map((skill) => (
                <a className="w-2/5 m-2" href={skill.url} target="_blank">
                  <div
                    key={skill.title}
                    className=" cursor-pointer px-6 h-10  bg-slate-200 shadow-md rounded-lg flex justify-center items-center text-center hover:scale-105 ease-in duration-100"
                  >
                    {skill.title}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
