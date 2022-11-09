import React from "react";
import Heading from "./Heading";
import Project from "./Project";
import { projectList } from "../data";
const Projects = () => {
  return (
    <section className="w-full min-h-screen bg-[#F6F6FF] bg-gradient-to-t from-stone-200 p-4">
      <div className="flex flex-col justify-center items-center">
        <Heading title={"Projects"} />

        <p className="text-xl w-2/3 text-center mt-5">
          Here you will find some of the personal and clients projects that I
          created with each project containing its own case study
        </p>

        <div className="projects my-8">
          {projectList.map((prj) => (
            <Project project={prj} key={prj.title} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;
