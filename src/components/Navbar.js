import React from 'react'
import { Link } from 'gatsby'
import styles from '../css/navbar.module.css'

const Navbar = () => {
    return (
        <div>
            {/* <div>
                <h1>Stephan's Tours</h1>
            </div> */}
            <nav>
                <ul className={styles.menu}>
                    <li><Link to="/">Home</Link></li>
                    {/* <li><Link to="/blog/">Blog</Link></li> */}
                    {/* <li><Link to="/products/">Products</Link></li> */}
                    {/* <li><Link to="/examples/">Examples</Link></li> */}
                    {/* <li><Link to="/images/">Images</Link></li> */}
                    <li><Link to="/tours/">Tours</Link></li>
                    <li><Link to="/contact/">Contact</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar