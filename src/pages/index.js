import React from "react"
import Layout from '../components/Layout'
// import { Button } from '../components/Button'
import '../css/layout.css'
import Updates from '../components/Updates/ListUpdates'
import { graphql } from 'gatsby'

const home = ({ data }) => {
  return (
    <Layout>
      <h1 className="title">What is the latest?</h1>
      <Updates updates={data.updates.edges} />
    </Layout>
  )
}

export const getUpdates = graphql`
query {
  updates:allContentfulUpdates {
    edges {
      node {
        updatesTitle
        updatesDate
        updatesSlug
        contId: contentful_id
        images: updatesMedia {
          fluid {
            ...GatsbyContentfulFluid_withWebp
          }
        }
        updatesDescription {
          updatesDescription
        }
      }
    }
  }
}
`

export default home
