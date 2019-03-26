import React from "react"

import {
  Article,
  H3,
  Lang,
  Text,
  A,
} from './styled';

const Project = ({ project }) => (
  <Article>
    <H3>
      {project.title}
      {project.lang && (
        <Lang>{' '}[{project.lang}]</Lang>
      )}
    </H3>

    <Text>{project.info}</Text>

    {project.extraInfo && (
      <Text extra>{project.extraInfo}</Text>
    )}

    {project.inDevelopment && (
      <Text extra><i>Project still in development</i></Text>
    )}

    <div>
      {project.code && (
        <A
          href={project.code}
          title={`${project.title} code`}>
          [code]
        </A>
      )}
      {project.live && (
        <A
          href={project.live}
          title={`${project.title} live`}>
          [live]
        </A>
      )}
    </div>
  </Article>
);

export default Project;
