import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import img from '../img/img3.jpg'
import Image from 'gatsby-image' // Gatsby Image Component

const getImg = graphql`
{
    fixed: file(relativePath: {eq: "img1.jpg"}) {
      childImageSharp {
        fixed(width: 200, grayscale:true ) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: {eq: "img2.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
  
`

const Images = () => {
    const data = useStaticQuery(getImg);
    // console.log(data);
    return (
        <Wrapper>
            <article>
                <h3>basic img</h3>
                <img src={img} className="basic" />
            </article>
            <article>
                <h3>fixed img/blur</h3>
                <Image fixed={data.fixed.childImageSharp.fixed} />
            </article>
            <article>
                <h3>fluid img/svg</h3>
                <Image fluid={data.fluid.childImageSharp.fluid} />
            </article>
        </Wrapper>
    )
}

const Wrapper = styled.section`
text-align:center;
text-transform:capitalize;
width:80vw;
margin:0 auto 10rem auto;
.basic {
    width:100%;
}
article {
    border:1px solid #000;
    padding:1rem 0;
}

@media (min-width:992px){
    display:grid;
    grid-template-columns:1fr 1fr 1fr;
    grid-column-gap:1rem;
}
`

export default Images
