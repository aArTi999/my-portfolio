import React from "react";
import Button from "./Button";

const Project = ({ project }) => {
  return (
    <div className="project flex flex-col lg:flex-row md:flex-row my-10 md:my-28 lg:my-28 p-5 justify-around">
      <div className="image md:w-3/5 lg:w-3/5 max-h-1/5  flex justify-center">
        <img src={project.imageUrl} alt="" className="w-3/4 " />
      </div>
      <div className=" prj-content my-4 md:w-2/5 lg:w-2/5 flex justify-center items-start flex-col">
        <h3 className="text-4xl w-full text-center md:text-left lg:text-left text-gray-900 font-bold my-5 tracking-wider">
          {project.title}
        </h3>
        <p className=" text-xl text-slate-600 tracking-wide text-justify">
          {project.description}
        </p>
        <div className="w-full text-center md:text-left">
          <a target="_blank" href={project.url}>
            <Button title={"View Project"} />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Project;
