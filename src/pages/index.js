import React, { Fragment } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import ProjectsGroup from "../components/projects-group"
import SEO from "../components/seo"

import sections from '../data.json';

import '../styles.css';

const IndexPage = () => (
  <main>
    <SEO
      title="Grzegorz Dzięgelewski | Homepage"
      keywords={[`gatsby`, `application`, `react`]}
    />
    {sections.map((section, index) => (
      <ProjectsGroup projectGroup={section} key={index} />
    ))}
  </main>
)

export default IndexPage
