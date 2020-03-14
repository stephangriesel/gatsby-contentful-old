import React from "react"
import Layout from '../components/Layout'
// import { Button } from '../components/Button'
import '../css/layout.css'
import Updates from '../components/Updates/ListUpdates'

export default () => (
    <Layout>
        <h1 className="title">What is the latest?</h1>
        <Updates />
    </Layout>
)
