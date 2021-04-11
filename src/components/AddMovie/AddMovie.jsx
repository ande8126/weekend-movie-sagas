import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';


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
        //NEEDED FOR STRETCHsetGenres( [...genres, event.target.value] )
        //Switch statement to get id# to POST --gotta be more efficient way but...
        switch( event.target.value ){
            case 'Adventure':
                setTempMovie({ ...tempMovie, genre_id: 1 })
                break
            case 'Animated':
                setTempMovie({ ...tempMovie, genre_id: 2 })
                break
            case 'Biographical':
                setTempMovie({ ...tempMovie, genre_id: 3 })
                break
            case 'Comedy':
                setTempMovie({ ...tempMovie, genre_id: 4 })
                break
            case 'Disaster':      
                setTempMovie({ ...tempMovie, genre_id: 5 })
                break
            case 'Drama':
                setTempMovie({ ...tempMovie, genre_id: 6 })
                break
            case 'Epic':
                setTempMovie({ ...tempMovie, genre_id: 7 })
                break
            case 'Fantasy':
                setTempMovie({ ...tempMovie, genre_id: 8 })
                break
            case 'Musical':
                setTempMovie({ ...tempMovie, genre_id: 9 })
                break
            case 'Romantic':
                setTempMovie({ ...tempMovie, genre_id: 10 })
                break
            case 'Science Fiction':
                setTempMovie({ ...tempMovie, genre_id: 11 })
                break
            case 'Space-Opera':
                setTempMovie({ ...tempMovie, genre_id: 12 })
                break
            case 'Superhero':
                setTempMovie({ ...tempMovie, genre_id: 13 })                
                break
        }
    }

    const addMovie = ( object ) =>{
        console.log( 'in addMovie', object ); //had array in params as part of stretch
        setTempMovie({ ...tempMovie, genre_id: genreId });
        dispatch({ type: 'SEND_MOVIE', payload: object })
        //use history to go back to gallery after dispatch
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
            {/* YOU NEED CANCEL BUTTON THAT GOES BACK TO GALLERY ( LINK ) */}
            {/* TRIED FOR STRETCH GOAL, CANT GET TO WORK */}
            {/* <p>Selected genres:</p>
            <ul>
                {genres.map( (genre)=> <li>{genre}</li>)}
            </ul> */}
            <button onClick={()=>addMovie( tempMovie )}>Add</button>
            <Link to="/">
                <button>Cancel</button>
            </Link>
        </>
    )
}

export default AddMovie
