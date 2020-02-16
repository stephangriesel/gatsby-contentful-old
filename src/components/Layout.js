import React from 'react'
import Navbar from './Navbar'
// import '../css/layout.css'
import '../sass/layout.scss'

const Layout = ({ children }) => {
    console.log(children);
    return (
        <>
            <Navbar />
            <main>
                {children}
            </main>
        </>
    )
}

export default Layout;
