import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav'

function Details({movie}){

    //useSelector to pull clicked movie from redux store



    return (
        <>
            <Nav />
            <p>{ JSON.stringify(movie[0].title)}</p>
            <h2>{movie[0].title}</h2>
            <img src={movie[0].poster} />
            <h3>Description:</h3>
            <p>{movie[0].description}</p>
            <h4>Genres:</h4>
            <ul>
                {movie.map( genre=> <li key={genre.id}>{genre.genre}</li>)}
            </ul>
            <Link to="/list">
                <button>Back</button>
            </Link>
            
        </> 
    )
}

export default Details
