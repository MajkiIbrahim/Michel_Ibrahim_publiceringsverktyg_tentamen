import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import SEO from "../components/SEO"

const ProjectsPage = ({
  data:{allStrapiProjects:{nodes:projects}}
}) => {
  return (
  <Layout>
    <SEO title="project" description="project" />
    <section className="projects-page">
      <Projects projects={projects} title="All projects" />
    </section>
  </Layout>
  )
}

//Get all projects with no filtering because we will show all projects
export const query = graphql`
  {
    allStrapiProjects {
      nodes {
        github
        title
        url
        description
        id
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
  }
`

export default ProjectsPage
