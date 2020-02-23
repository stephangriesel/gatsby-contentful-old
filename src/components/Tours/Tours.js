import React from 'react'
import SingleTour from './SingleTour'

const Tours = ({ tours }) => {
    console.log(tours)
    return (
        <div>
            tours component
            <SingleTour />
        </div>
    )
}

export default Tours
