import React from "react";
import ProjectItem from "./ProjectItem";
import App from "./App";

function ProjectList({ projects }) {
  console.log(projects);

  const projectsArray = projects.map((project) => {
    return <ProjectItem key={project.id} {...project} />
  })

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projectsArray}</div>
    </div>
  );
}

export default ProjectList;
