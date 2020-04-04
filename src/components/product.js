import React, { useState, useEffect } from "react";
import styles from '../css/booking.module.css';

const Product = ({ skus, product, image }) => {
    // Troubleshooting documention for build
    // https://www.gatsbyjs.org/docs/debugging-html-builds/
    // https://www.gatsbyjs.org/docs/processing-payments-with-stripe/
    const [stripe, setStripe] = useState(null)
    useEffect(() => {
        if (typeof window !== undefined && typeof window.Stripe !== undefined) {
            setStripe(window.Stripe(`${process.env.GATSBY_STRIPE_PK}`))
        }
    }, [])
    // const stripe = window.Stripe(`${process.env.STRIPE_PK}`) // < old version 

    const [sku, setSku] = useState(skus[0].node.id);

    const placeOrder = () => {
        stripe.redirectToCheckout({
            items: [
                {
                    sku: sku,
                    quantity: 1
                }
            ],
            successUrl: "https://stephantours.netlify.com/success/",
            cancelUrl: "https://stephantours.netlify.com/cancel/"
        })
    }
    return (
        <article class={styles.booking}>
            <img src={image} alt="Shirt" />
            <h3 class={styles.productName}>{product.name}</h3>
            <select value={sku} onChange={(e) => setSku(e.target.value)}>
                {skus.map(edge =>
                    < option
                        key={edge.node.id} value={edge.node.id} > {edge.node.attributes.name}
                    </option>
                )}

            </select>
            <button class={styles.btn} onClick={placeOrder}>Book My Spot</button>
        </article >
    )
}

export default Product
