import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"


const SecondPage = () => (
    <Layout>
        <h1>Cancelled</h1>
        <p>Your order was cancelled</p>
        <Link to="/">Go back to the homepage</Link>
    </Layout>
)

export default SecondPage
