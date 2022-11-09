import React from "react";
import { skills } from "../data";
import Heading from "./Heading";
import Button from "./Button";

const About = () => {
  return (
    <section className="w-full min-h-screen bg-[#F6F6FF] bg-gradient-to-t from-stone-200 p-4">
      <div className="flex flex-col justify-center items-center">
        <Heading title={"About Us"} />
        <p className="text-xl w-2/3 text-center mt-5">
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </p>
        <div className="flex flex-row justify-between">
          <div className="w-1/2 p-10">
            <h3 className="text-2xl font-bold ">Get to know me</h3>
            <p className="my-4 leading-6 text-lg">
              I'm a Frontend Web Developer building the Front-end of Websites
              and Web Applications that leads to the success of the overall
              product. Check out some of my work in the Projects section.{" "}
            </p>
            <p className="my-4 leading-6 text-lg">
              I also like sharing content related to the stuff that I have
              learned over the years in Web Development so it can help other
              people of the Dev Community. Feel free to Connect or Follow me on
              my Linkedin where I post useful content related to Web Development
              and Programming
            </p>
            <p className="my-4 leading-6 text-lg">
              I'm open to Job opportunities where I can contribute, learn and
              grow. If you have a good opportunity that matches my skills and
              experience then don't hesitate to contact me
            </p>
            <Button title={"contact"} />
          </div>
          <div className="w-1/2 p-10">
            <h3 className="text-2xl font-bold">My Skills</h3>
            <div className="flex flex-wrap mt-4 gap-4 ">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="px-6 h-10 bg-slate-200 shadow-md rounded-lg flex justify-center items-center text-center "
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
