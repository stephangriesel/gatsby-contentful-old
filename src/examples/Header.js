import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Header = () => {
    // const { site } = useStaticQuery(graphql` << before more destructuring below
    // const { site: { siteMetadata } } = useStaticQuery(graphql` << before even more destructuring below
    // below explanation: destructure and give it an alias of info
    const { site: { siteMetadata: info } } = useStaticQuery(graphql` 
    {
        site{
          siteMetadata{
            description
            title
            author
            data{
              nickname
              age
            }
          }
        }
      }
    `)
    // console.log(data); << before destructuring
    console.log(info);
    return (
        <div>
            {/* <h1>Author:{data.site.siteMetadata.author}</h1> << before destructuring */}
            <h1>Author:{info.author}</h1>
            <h1>Title:{info.title}</h1>
        </div>
    )
}

export default Header;
