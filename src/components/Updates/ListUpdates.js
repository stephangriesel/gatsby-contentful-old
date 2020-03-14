import React from 'react'
import SingleUpdate from './SingleUpdate'

const ListUpdates = ({ updates }) => {
    console.log(updates)
    return (
        <div>
            Listing of updates
            <SingleUpdate />
        </div>
    )
}
export default ListUpdates
