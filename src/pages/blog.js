import React, { Component } from 'react'
import { Link } from 'gatsby'

export default class blog extends Component {
    render() {
        return (
            <div>
                blog
                <div>
                    {/* <a href="/blog">Blog</a> */}
                    <Link to="/">Home</Link>
                </div>
            </div>
        )
    }
}
