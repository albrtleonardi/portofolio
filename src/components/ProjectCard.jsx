import React from "react";

const ProjectCard = ({ isDarkMode }) => {
  return (
    <div className="font-switzer">
      <hr
        className={`mb-3 ${isDarkMode ? "border-gray-700" : "border-gray-300"}`}
      />
      <div>
        <h1 className={`${isDarkMode ? "text-gray-200" : "text-gray-900"}`}>
          World University
        </h1>
        <div className="flex justify-between">
          <p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
            Website
          </p>
          <p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
            4
          </p>
        </div>
        <div
          className={`mt-8 ${
            isDarkMode
              ? "bg-[#3b3b3b] hover:bg-[#636363]"
              : "bg-gray-200 hover:bg-gray-300"
          } w-full aspect-w-1 aspect-h-1 flex items-center justify-center relative rounded-md border-none transition-colors duration-200`}
        >
          <img
            className="w-[72%] h-[36vh] mt-16 object-cover"
            src="https://images.unsplash.com/photo-1545569341-9eb8b30979d9?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGphcGFufGVufDB8fDB8fHww"
            alt="World University"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
