import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import Nav from '../Nav/Nav';
import './MovieList.css'

function MovieList() {
    //needed to use history
    const history = useHistory();
    //needed to use dispatch
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    ////-dispatch >> reducer >> saga axios >> router >> db >> saga put >> useSelector in /details-////
    //click should also run GET route for specific movie clicked
    const getSpecificMovie = ( movieId ) =>{
        //target id of movie clicked
        console.log( 'in getSpecificMovie', movieId );
        //send dispatch
        //new type needed for GET route for clicked movie
        dispatch({ type: 'FETCH_SPECIFIC_MOVIE', payload: movieId })
        //link to details page
        history.push('/details');

    }
    
    
    //query needs joins to bring in genre
    //useHistory to push to /details


    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
            <Nav />
            <h2>MovieList</h2>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div onClick={()=>getSpecificMovie(movie.id)} key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title}/>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;