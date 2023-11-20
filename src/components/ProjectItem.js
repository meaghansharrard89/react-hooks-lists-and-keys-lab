import React from "react";
import ProjectList from "./ProjectList";

function ProjectItem({ name, about, technologies }) {
  const technologiesArray = technologies.map((item, index) => {
    return <span key={index}>{item}</span>
  })

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technologiesArray}
      </div>
    </div>
  );
}

export default ProjectItem;
