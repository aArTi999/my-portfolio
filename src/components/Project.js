import React from "react";
import Button from "./Button";

const Project = ({ project }) => {
  return (
    <div className="project flex my-28 p-5 justify-around">
      <div className="image w-3/5 max-h-1/5  flex justify-center">
        <img src={project.imageUrl} alt="" className="w-3/4 " />
      </div>
      <div className=" prj-content w-2/5  flex justify-center items-start flex-col">
        <h3 className="text-4xl text-gray-900 font-bold my-5 tracking-wider">
          {project.title}
        </h3>
        <p className=" text-xl text-slate-600 tracking-wide text-justify">
          {project.description}
        </p>

        <a target="_blank" href={project.url}>
          <Button title={"View Project"} />
        </a>
      </div>
    </div>
  );
};
export default Project;
