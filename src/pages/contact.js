import React, { Component } from 'react'
import Layout from '../components/Layout'
import styles from '../css/contact.module.css'

// console.log(styles);

export default class contact extends Component {
    render() {
        return (
            <Layout>
                <h1 className={styles.title}>Contact</h1>
            </Layout>
        )
    }
}