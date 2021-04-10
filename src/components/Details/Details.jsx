import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from '../MovieList/MovieList';

function Details(){

    //useSelector to pull clicked movie from redux store
    const movie = useSelector(( store )=>{
        return store.specificMovie;
    })


    return (
        <div>
            <h2>{movie[0].movie}</h2>
            <h3>Description:</h3>
            <p>{movie[0].description}</p>
            <h4>Genres:</h4>
            <ul>
                {movie.map( genre=> <li>{genre.genre}</li>)}
            </ul>
        </div>
    )
}

export default Details
