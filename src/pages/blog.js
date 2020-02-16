import React, { Component } from 'react'
import Layout from '../components/Layout'
import styles from '../css/blog.module.css'

console.log(styles);

export default class blog extends Component {
    render() {
        return (
            <Layout>
                <h1 className={styles.title}>Blog</h1>
            </Layout>
        )
    }
}
