import React from 'react'
import HeaderHooks from '../examples/Header-Hooks'
import HeaderStatic from '../examples/Header-Static'
import { graphql } from 'gatsby'

const examples = (props) => {
    // console.log(props);
    // destructure...
    const { nickname, age } = props.data.site.siteMetadata.person
    return (
        <div>
            examples page
            <HeaderHooks />
            <HeaderStatic />
            <div>
                <h4>Your nickname is:{nickname}</h4>
                <h4>Your age is:{age}</h4>
            </div>
        </div>

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