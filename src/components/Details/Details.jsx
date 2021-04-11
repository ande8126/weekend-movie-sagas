import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import Nav from '../Nav/Nav'

function Details(){
    ////STRETCH GOAL
    const dispatch = useDispatch();
    //params setup
    const params = useParams();
    let movieId = params.id
    //useSelectors to pull clicked movie and genres from redux store
    const movie = useSelector( ( store )=>{
        return store.specificMovie
})
    const genres = useSelector( ( store )=>{
        return store.genres
    })
    useEffect(() => {
        dispatch({ type: 'GET_GENRES', payload: Number(movieId) })
        dispatch({ type: 'GET_DETAILS', payload: Number(movieId) }) //stretch - need redux store with genres too
    }, []);
    console.log( 'movie:', movie );
    return (
        <>
            <Nav />
            {/* <p>{JSON.stringify(genres)}</p>
            <p>{JSON.stringify(movie)}</p> */}
            <h2>{movie.title}</h2>
            <img src={movie.poster} />
            <h3>Description:</h3>
            <p>{movie.description}</p>
            <h4>Genres:</h4>
            <ul>
                {genres.map( (genre, index)=> <li key={index}>{genre.name}</li>)}
            </ul>
            <Link to="/list">
                <button>Back</button>
            </Link>
            
        </> 
    )
}

export default Details
