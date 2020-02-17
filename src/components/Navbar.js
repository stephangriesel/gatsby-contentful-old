import React from 'react'
import { Link } from 'gatsby'
// import styles from '../sass/navbar.module.scss'

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/blog/">Blog</Link></li>
                <li><Link to="/products/">products</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar