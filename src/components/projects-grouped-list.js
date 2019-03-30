import React from "react";

import ProjectsGroup from "./projects-group"


const ProjectsGroupedList = ({ groups }) => (
  groups.map((section, index) => (
      <>
        {index > 0 && <hr />}
        <ProjectsGroup projectGroup={section} key={index} />
      </>
    ))
)

export default ProjectsGroupedList;
