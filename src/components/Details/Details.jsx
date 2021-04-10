import React from 'react'

const Details = ( {movies} ) => {
    return (
        <div>
            <p>{JSON.stringify(movies)}</p>
        </div>
    )
}

export default Details
