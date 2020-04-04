import React from 'react'
import Products from '../products';
import styles from '../../css/book.module.css';

const BookTour = () => {
    return (
        <div className={styles.bookingGrid}>
            <Products />
        </div>
    )
}

export default BookTour
