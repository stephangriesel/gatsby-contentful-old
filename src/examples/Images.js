import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import img from '../img/img3.jpg'
import Image from 'gatsby-image'

const Images = () => {
    return (
        <Wrapper>
            <article>
                <h3>basic img</h3>
            </article>
            <article>
                <h3>fixed img/blur</h3>
            </article>
            <article>
                <h3>fluid img/svg</h3>
            </article>
        </Wrapper>
    )
}

const Wrapper = styled.section`
text-align:center;
text-transform:capitalize;
width:80vw;
margin:0 auto 10rem auto;
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
