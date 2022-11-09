import React from "react";

const Heading = ({ title }) => (
  <div className="flex-column">
    <h2 className="text-3xl uppercase font-medium">{title}</h2>
    <div className=" w-full">
      <hr className="w-8 mx-auto bg-yellow-400 h-1.5 rounded-lg mt-8" />
    </div>
  </div>
);

export default Heading;
