import React from 'react'
import Navbar from './Navbar'
import '../css/layout.css'
// import '../sass/layout.scss'

const Layout = ({ children }) => {
    console.log(children);
    return (
        <div className="wrapper">
            <Navbar />
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout;
