import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectList = ({ isDarkMode }) => {
  return (
    <div className="pt-8 px-4 sm:px-6 lg:px-8 mt-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <ProjectCard isDarkMode={isDarkMode} />
        <ProjectCard isDarkMode={isDarkMode} />
        <ProjectCard isDarkMode={isDarkMode} />
        <ProjectCard isDarkMode={isDarkMode} />
      </div>
    </div>
  );
};

export default ProjectList;
