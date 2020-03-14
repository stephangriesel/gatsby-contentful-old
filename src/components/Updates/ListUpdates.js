import React from 'react'
import SingleUpdate from './SingleUpdate'

const ListUpdates = ({ updates }) => {
    console.log(updates)
    return (
        <div>
            {updates.map(({ node }) => {
                return <SingleUpdate key={node.id} update={node} />
            })}
        </div>
    )
}
export default ListUpdates
