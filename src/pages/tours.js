import React from 'react'
import Tours from '../components/Tours/Tours'
import Layout from '../components/Layout'
import { graphql } from 'gatsby' // querying inside page so would need this

const tours = ({ data }) => {
    // console.log(data)
    return (
        <Layout>
            tours
            <Tours tours={data.tours.edges} />
        </Layout>
    )
}

/**  remember if using images to replace dummy data (src) with fragment from gatsby image docs:
https://www.gatsbyjs.org/packages/gatsby-image/
>> example:
images{
        fluid{
           src
      }
   }
*/

export const getTours = graphql`
query {
    tours:allContentfulTourExample {
      edges{
        node{
          name
          price
          slug
          country
          contentful_id
          days
          images{
            fluid{
                ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`

export default tours
