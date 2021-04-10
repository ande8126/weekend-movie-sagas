import React, { useState } from 'react'
import { useDispatch } from 'react-redux'


const AddMovie = () => {
    //variable to hold movie object that sends with click handler
    const [ tempMovie, setTempMovie ] = useState({})
    const [ genres, setGenres ] = useState([])

    const handleTitle = ( event ) =>{
        console.log( 'in handleName', event.target.value );
        setTempMovie({ ...tempMovie, title: event.target.value })
    }
    const handleDescription = ( event ) =>{
        console.log( 'in handleDescription', event.target.value );
        setTempMovie({ ...tempMovie, description: event.target.value })
    }
    const handlePoster = ( event ) =>{
        console.log( 'in handleName', event.target.value );
        setTempMovie({ ...tempMovie, poster: event.target.value })
    }
    const handleGenres = ( event ) =>{
        console.log( 'in handleGenres', event.target.value );
        setGenres( [...genres, event.target.value] )
    }

    const addMovie = ( object, array ) =>{
        console.log( 'in addMovie', object, array );
    }

    console.log( 'genres:', genres)
    console.log( 'tempMovie:', tempMovie )
    return ( 
        <>
            <input type="text" placeholder="movie title" onChange={handleTitle} />
            <input type="text" placeholder="description" onChange={handleDescription} />
            <input type="text" placeholder="image url for poster" onChange={handlePoster} />
            <label>Genre (pick more than one):</label>
            <select onChange={handleGenres}>
                <option>Biographical</option>
                <option>Comedy</option>
                <option>Science Fiction</option>
                <option>Musical</option>
                <option>Animated</option>
                <option>Drama</option>
                <option>Space Opera</option>
                <option>Adventure</option>
                <option>Epic</option>
                <option>Superhero</option>
                <option>Fantasy</option>
                <option>Romantic</option>
            </select>
            <p>Selected genres:</p>
            <ul>
                {genres.map( (genre)=> <li>{genre}</li>)}
            </ul>

            <button onClick={addMovie}>Add</button>
        </>
    )
}

export default AddMovie
