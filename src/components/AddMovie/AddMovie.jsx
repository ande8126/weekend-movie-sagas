import React, { useState } from 'react'
import { useDispatch } from 'react-redux'


const AddMovie = () => {
    //needed to use dispatch
    const dispatch = useDispatch();
    //variable to hold movie object that sends with click handler
    const [ tempMovie, setTempMovie ] = useState({})
    // const [ genres, setGenres ] = useState([]) -- needed for stretch goal, cant get to work
    const [ genreId, setGenreId ] = useState()

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
        // NEEDED FOR STRETCHsetGenres( [...genres, event.target.value] )
        //Switch statement to get id# to POST --gotta be more efficient way but...
        switch( event.target.value ){
            case 'Adventure':
                setGenreId(1)
                setTempMovie({ ...tempMovie, genre_id: genreId })
                break
            case 'Animated':
                setGenreId(2)
                setTempMovie({ ...tempMovie, genre_id: genreId })
                break
            case 'Biographical':
                setGenreId(3)
                setTempMovie({ ...tempMovie, genre_id: genreId })
                break
            case 'Comedy':
                setGenreId(4)
                setTempMovie({ ...tempMovie, genre_id: genreId })
                break
            case 'Disaster':
                setGenreId(5)        
                setTempMovie({ ...tempMovie, genre_id: genreId })
                break
            case 'Drama':
                setGenreId(6)
                setTempMovie({ ...tempMovie, genre_id: genreId })
                break
            case 'Epic':
                setGenreId(7)
                setTempMovie({ ...tempMovie, genre_id: genreId })
                break
            case 'Fantasy':
                setGenreId(8)
                setTempMovie({ ...tempMovie, genre_id: genreId })
                break
            case 'Musical':
                setGenreId(9)
                setTempMovie({ ...tempMovie, genre_id: genreId })
                break
            case 'Romantic':
                setGenreId(10)
                setTempMovie({ ...tempMovie, genre_id: genreId })
                break
            case 'Science Fiction':
                setGenreId(11)
                setTempMovie({ ...tempMovie, genre_id: genreId })
                break
            case 'Space-Opera':
                setGenreId(12)
                setTempMovie({ ...tempMovie, genre_id: genreId })
                break
            case 'Superhero':
                setGenreId(13)
                setTempMovie({ ...tempMovie, genre_id: genreId })
                break
        }
    }

    const addMovie = ( object ) =>{
        console.log( 'in addMovie', object ); //had array in params as part of stretch
        dispatch({ type: 'SEND_MOVIE', payload: object })
       // dispatchEvent({ type: 'SEND_GENRES', payload: array }) //attempting stretch, but is this even needed?
    }

    console.log( 'tempMovie:', tempMovie );
    console.log( 'genreId:', genreId );
    return ( 
        <>
            <input type="text" placeholder="movie title" onChange={handleTitle} />
            <input type="text" placeholder="description" onChange={handleDescription} />
            <input type="text" placeholder="image url for poster" onChange={handlePoster} />
            <label>Genre (pick more than one):</label>
            <select onChange={handleGenres}>
                <option>none</option>
                <option>Adventure</option>
                <option>Animated</option>
                <option>Biographical</option>
                <option>Comedy</option>
                <option>Disaster</option>
                <option>Drama</option>
                <option>Epic</option>
                <option>Fantasy</option>
                <option>Musical</option>
                <option>Romantic</option>
                <option>Science Fiction</option>
                <option>Space-Opera</option>
                <option>Superhero</option>
            </select>
            {/* TRIED FOR STRETCH GOAL, CANT GET TO WORK */}
            {/* <p>Selected genres:</p>
            <ul>
                {genres.map( (genre)=> <li>{genre}</li>)}
            </ul> */}
            <button onClick={()=>addMovie( tempMovie )}>Add</button>
        </>
    )
}

export default AddMovie
