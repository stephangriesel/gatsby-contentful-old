import React from 'react'
import { Link } from 'gatsby'
import styles from '../css/navbar.module.css'

const Navbar = () => {
    return (
        <header>
            <div className={styles.logo}>
                test
            </div>
            <div className={styles.menuWrapper}>
                <nav>
                    <ul className={styles.menu}>
                        <Link to="/"><li>Home</li></Link>
                        {/* <li><Link to="/blog/">Blog</Link></li> */}
                        {/* <li><Link to="/products/">Products</Link></li> */}
                        {/* <li><Link to="/examples/">Examples</Link></li> */}
                        {/* <li><Link to="/images/">Images</Link></li> */}
                        <Link to="/tours/"><li>Tours</li></Link>
                        <Link to="/contact/"><li>Contact</li></Link>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Navbar