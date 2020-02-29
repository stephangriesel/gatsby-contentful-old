import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import styles from '../css/template.module.css'
import Image from 'gatsby-image'
import { FaMoneyBillWave, FaMap } from 'react-icons/fa'
import { Link } from 'gatsby'


const TourTemplate = props => {
    console.log(props)
    return (
        <div>
            template test
        </div>
    )
}


export const query = graphql`
query($slug:String!) {
    tour:contentfulTourExample(slug:{eq:$slug}){
      name
      price
      country
      days
      start(formatString:"dddd - Do MMMM, YYYY")
      journey {
        day
        info
      }
      description{
        description
      }
      images {
        fluid {
          srcSet
        }
      }
    }
  }
`
export default TourTemplate
