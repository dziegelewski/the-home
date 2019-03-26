import React from "react"

import sections from "../data/sections.json"
import ProjectsGroup from "../components/projects-group"
import SEO from "../components/seo"
import { Main } from "../components/styled"

const IndexPage = () => (
  <Main>
    <SEO
      title="Grzegorz Dzięgelewski | Homepage"
      keywords={[`gatsby`, `application`, `react`]}
    />
    {sections.map((section, index) => (
      <>
        {index > 0 && <hr />}
        <ProjectsGroup projectGroup={section} key={index} />
      </>
    ))}
  </Main>
)

export default IndexPage
