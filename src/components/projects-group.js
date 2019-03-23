import React from "react"
import Project from './project';

const ProjectsGroup = ({ projectGroup }) => (
  <section>
    <h2>{projectGroup.title}</h2>
    {projectGroup.children.map((child, index) => (
      <Project key={index} project={child} />
    ))}
  </section>
);

export default ProjectsGroup;
