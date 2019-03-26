import React  from "react"
import styled from 'styled-components';

import Project from './project';
import {
  H2,
} from './styled';

const ProjectsGroup = ({ projectGroup }) => (
  <section>
    <H2>{projectGroup.title}</H2>
    {projectGroup.children.map((child, index) => (
      <Project key={index} project={child} />
    ))}
  </section>
);

export default ProjectsGroup;
