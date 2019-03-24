import React, { Fragment } from "react"
import styled from 'styled-components';

import sections from "../data/sections.json"
import ProjectsGroup from "../components/projects-group"
import SEO from "../components/seo"

const Main = styled.main`
  max-width: 600px;
  margin: 1rem auto;
  font-size: 1.6rem;
  padding: 0 1rem;
  line-height: 150%;

`
const IndexPage = () => (
  <Main>
    <SEO
      title="Grzegorz Dzięgelewski | Homepage"
      keywords={[`gatsby`, `application`, `react`]}
    />
    {sections.map((section, index) => (
      <Fragment>
        {index > 0 && <hr />}
        <ProjectsGroup projectGroup={section} key={index} />
      </Fragment>
    ))}
  </Main>
)

export default IndexPage
