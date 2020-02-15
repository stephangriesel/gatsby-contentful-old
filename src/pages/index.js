import React from "react"
import { Link } from 'gatsby'

export default () => (
    <div>
        <h1>Home</h1>
        Hello world!
        <div>
            {/* <a href="/blog">Blog</a> */}
            <Link to="/blog">Blog</Link>
        </div>
        <div>
            <a href="https://www.gatsbyjs.org">Gatsby Docs</a>
        </div>
    </div>
)
