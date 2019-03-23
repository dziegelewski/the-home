import React from "react"

const Project = ({ project }) => (
  <article>
    <h3>
      {project.title}
      {project.lang && (
        <span className="lang">[{project.lang}]</span>
      )}
    </h3>

    <p>{project.info}</p>

    {project.extraInfo && (
      <p className="extra-info">{project.extraInfo}</p>
    )}

    {project.inDevelopment && (
      <p class="extra-info"><i>Project still in development</i></p>
    )}

    <div>
      {project.code && (
        <a
          href={project.code}
          title={`${project.title} code`}>
          [code]
        </a>
      )}
      {project.live && (
        <a
          href={project.live}
          title={`${project.title} live`}>
          [live]
        </a>
      )}
    </div>
  </article>
);

export default Project;
