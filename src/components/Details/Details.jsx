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

    //get one movie at db id from movie array
    let thisMovie = movies[Number(movieId)-1]



    return (
        <>
            <Nav />
            <p>{JSON.stringify(movies)}</p>
            {/* <h2>{movie[0].title}</h2>
            <img src={movie[0].poster} />
            <h3>Description:</h3>
            <p>{movie[0].description}</p>
            <h4>Genres:</h4>
            <ul>
                {movie.map( genre=> <li key={genre.id}>{genre.genre}</li>)}
            </ul> */}
            <Link to="/list">
                <button>Back</button>
            </Link>
            
        </> 
    )
}

export default Details
