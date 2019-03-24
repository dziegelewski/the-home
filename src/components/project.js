import React from "react"
import styled from 'styled-components';

const Article = styled.article`
  display: flex;
  flex-direction: column;
  margin: 2rem 0 1rem;
`

const H3 = styled.h3`
  font-size: 1.5rem;
  margin: .5rem 0;
`

const Lang = styled.span`
  color: #aaa;
  font-size: 1rem;
`

const Text = styled.p`
  margin: 0 0 .5rem;
`

const TextExtra = styled(Text)`
  font-size: 1.2rem;
`

const A = styled.a`
  margin-right: .5em;
`


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
      <TextExtra>{project.extraInfo}</TextExtra>
    )}

    {project.inDevelopment && (
      <TextExtra><i>Project still in development</i></TextExtra>
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
