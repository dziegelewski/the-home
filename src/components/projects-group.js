import React  from "react"
import styled from 'styled-components';

import Project from './project';

const H2 = styled.h2`
  font-size: 2.5rem;
  font-weight: 400;
  margin: 2rem 0 1rem;
`

const ProjectsGroup = ({ projectGroup }) => (
  <section>
    <H2>{projectGroup.title}</H2>
    {projectGroup.children.map((child, index) => (
      <Project key={index} project={child} />
    ))}
  </section>
);

export default ProjectsGroup;
