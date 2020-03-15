import React from 'react'
import Image from 'gatsby-image'
import { Link } from 'gatsby'

const SingleUpdate = ({ update }) => {
    console.log(update);
    const { updatesTitle, updatesDate, updatesSlug, images, updatesDescription: { updatesDescription } } = update
    const updateImage = images[0].fluid
    return (
        <div>
            <div>
                <Image fluid={updateImage} alt={updatesTitle} />
            </div>
            <div>
                <h3>{updatesTitle}</h3>
                <h6>{updatesDate}</h6>
                <p>{updatesDescription}</p>
                <Link to={`/${updatesSlug}`}>.. more</Link>
            </div>
        </div>
    )
}

export default SingleUpdate