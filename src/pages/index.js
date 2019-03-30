import React from "react"

import sections from "../data/sections.json"
import SEO from "../components/seo"
import { Main } from "../components/styled"
import groupAndEntitleByYears from "../helpers/group-and-entitle-by-years.js";
import ProjectsGroupedList from "../components/projects-grouped-list";


const IndexPage = () => (
  <Main>
    <SEO
      title="Grzegorz Dzięgelewski | Homepage"
      keywords={[`gatsby`, `application`, `react`]}
    />
    <ProjectsGroupedList
      groups={groupAndEntitleByYears(sections)}
    />
  </Main>
)

export default IndexPage
