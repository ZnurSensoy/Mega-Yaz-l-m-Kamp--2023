import React from "react";
import Navbar from "../Navbar/Navbar";
import Slider from "../Slider/Slider";
import Users from "../Users/Users";

const ProjectPages = () => {
  return (
    <div>
      {" "}
      <React.Fragment>
        <Navbar />
        <Slider />
        <Users />
      </React.Fragment>
    </div>
  );
};

export default ProjectPages;