import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import Nav from '../Nav/Nav'

function Details(){
    const dispatch = useDispatch();
    //params setup
    const params = useParams();
    let movieId = params.id
    ////STRETCH GOAL
    useEffect(() => {
        dispatch({ type: 'GET_DETAILS', payload: Number(movieId)+1 }) //stretch - need redux store with genres too
    }, []);



    //useSelector to pull clicked movie from redux store
    const movies = useSelector(( store )=>{
        return store.specificMovie
    })

    //get one movie
    let thisMovie = movies[0]



    return (
        <>
            <Nav />
            <p>{JSON.stringify(thisMovie)}</p>
            <h2>{thisMovie.title}</h2>
            <img src={thisMovie.poster} />
            <h3>Description:</h3>
            <p>{thisMovie.description}</p>
            <h4>Genres:</h4>
            <ul>
                {movies.map( (genre, index)=> <li key={index}>{genre.genre}</li>)}
            </ul>
            <Link to="/list">
                <button>Back</button>
            </Link>
            
        </> 
    )
}

export default Details
