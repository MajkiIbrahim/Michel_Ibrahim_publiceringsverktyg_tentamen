import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import SEO from "../components/SEO"

const Error = () => {
  return (
    <Layout>
      <SEO title="404" description="not found" />
      <main className="error-page">
        <div className="error-container">
          <h1>Ops..Wrong place buddy</h1>
          <Link to='/' className="btn">
            Home
          </Link>
        </div>
      </main>
    </Layout>
  )
}

export default Error
