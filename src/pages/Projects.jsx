import React from "react";
import ProjectList from "../components/ProjectList";

const Projects = ({ isDarkMode }) => {
  return (
    <div>
      <ProjectList isDarkMode={isDarkMode} />
    </div>
  );
};

export default Projects;
