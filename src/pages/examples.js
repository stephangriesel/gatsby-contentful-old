import React from 'react'
import HeaderHooks from '../examples/Header-Hooks'
import HeaderStatic from '../examples/Header-Static'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

const examples = (props) => {
    // console.log(props);
    // destructure...
    const { nickname, age } = props.data.site.siteMetadata.person
    return (
        <Layout>
            examples page
            <HeaderHooks />
            <HeaderStatic />
            <div>
                <h4>Your nickname is:{nickname}</h4>
                <h4>Your age is:{age}</h4>
            </div>
        </Layout>

    )
}

export const getData = graphql` 
query {
    site{
      siteMetadata{
        description
        title
        author
        person: data{
          nickname
          age
        }
      }
    }
  }
`

export default examples;