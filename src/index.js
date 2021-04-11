import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.jsx';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery( 'FETCH_MOVIES', fetchAllMovies );
    yield takeEvery( 'GET_DETAILS', getDetails )
    yield takeEvery( 'SEND_MOVIE', sendSavedMovie  )
}

function* fetchAllMovies( action ) {
    // get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie', { params: { type: action.payload } } );
        console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });

    } catch {
        console.log('get all error');
    }
        
}

//THIS WAS MY ORIGINAL SAGA
//This is the saga for getting a specific movie from the db
function* getDetails( action ){
    try{
        const movie = yield axios.get('/api/movie/' + action.payload );
        console.log( 'get specific movie:', action.payload );
        yield put({ type: 'SET_SPECIFIC_MOVIE', payload: movie.data })
        
    } catch{
        console.log( 'error in fetchOneMovie saga' );
    }
}

////TRIED THIS FOR DETAILS SAGA BUT GOING BACK TO SOMETHING ELSE
// function* getDetails( action ){
//     try{
//         const movies = yield axios.get('/api/movie', { params: { type: action.payload } } );
//         console.log( 'get details:', action.payload );
//         yield put({ type: 'SET_DETAILS', payload: movies.data })
        
//     } catch{
//         console.log( 'error in getDetails saga' );
//     }
// }

//saga for adding a movie to db (axios POST\)
function* sendSavedMovie( action ){
    try{
        yield axios.post('/api/movie', action.payload );
        console.log( 'send saved movie:', action.payload );
    } catch{
        console.log( 'error in sendSavedMovie saga');
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();


////REDUCERS GO HERE
// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

//THIS WAS MY ORIGINAL
//REPLACED WITH NEW REDUCER ABOVE
//This reducer is for opening specific movies in /details
const specificMovie = ( state=[], action ) =>{
    if ( action.type === 'SET_SPECIFIC_MOVIE' ){
        console.log( 'in specificMovie reducer', action );
        state = action.payload;
    }
    return state;
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        specificMovie,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
