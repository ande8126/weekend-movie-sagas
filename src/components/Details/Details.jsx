import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Details(){

    //useSelector to pull clicked movie from redux store
    const movie = useSelector(( store )=>{
        return store.specificMovie;
    })


    return (
        <div>
            <h2>{movie[0].movie}</h2>
            <img src={movie[0].poster} />
            <h3>Description:</h3>
            <p>{movie[0].description}</p>
            <h4>Genres:</h4>
            <ul>
                {movie.map( genre=> <li key={genre.id}>{genre.genre}</li>)}
            </ul>
            <Link to="/">
                <button>Back</button>
            </Link>
            
        </div> 
    )
}

export default Details
