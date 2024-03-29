import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../components/Layout'
import styles from '../css/details.module.css'

function encode(data) {
    return Object.keys(data)
        .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&')
}

export default function Contact() {
    const [state, setState] = React.useState({})

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({
                'form-name': form.getAttribute('name'),
                ...state,
            }),
        })
            .then(() => navigate(form.getAttribute('action')))
            .catch((error) => alert(error))
    }

    return (
        <Layout>
            <h1>Booking</h1>
            <form
                name="booking"
                method="post"
                action="/book/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
            >
                <input type="hidden" name="form-name" value="contact" />
                <p hidden>
                    <label>
                        Don’t fill this out: <input name="bot-field" onChange={handleChange} />
                    </label>
                </p>
                <p>
                    {/* <label>
                        Your name: */}
                    <input class={styles.input} type="text" placeholder="Your Full Name" name="name" onChange={handleChange} />
                    {/* </label> */}
                </p>
                <p>
                    {/* <label>
                        Your email: */}
                    <input class={styles.input} type="email" placeholder="Your Email Address" name="email" onChange={handleChange} />
                    {/* </label> */}
                </p>
                <p>
                    {/* <label>
                        Your contact number: */}
                    <input class={styles.input} name="text" placeholder="Your Contact Number" name="contact-number" onChange={handleChange} />
                    {/* </label> */}
                </p>
                <p>
                    <button class={styles.btn} type="submit">Confirm & Pay</button>
                </p>
            </form>
        </Layout>
    )
}