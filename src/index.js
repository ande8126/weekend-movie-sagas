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
    yield takeEvery( 'GET_GENRES', getGenres );
    yield takeEvery( 'GET_DETAILS', getDetails );
    yield takeEvery( 'SEND_MOVIE', sendSavedMovie  );
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

//This is the saga for getting a specific movie's genres from the db
function* getGenres( action ){
    try{
        const movie = yield axios.get('/api/genre/' + action.payload );
        console.log( 'get genres', action.payload );
        yield put({ type: 'SET_GENRES', payload: movie.data })
        
    } catch{
        console.log( 'error in getDetails saga' );
    }
}

//This is the saga for getting a specific movie's details from the db
function* getDetails( action ){
    try{
        const movie = yield axios.get('/api/movie/' + action.payload );
        console.log( 'get details', action.payload );
        yield put({ type: 'SET_DETAILS', payload: movie.data[0] })
        
    } catch{
        console.log( 'error in getDetails saga' );
    }
}

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

//This reducer is for opening specific movies in /details
const specificMovie = ( state = {} , action ) =>{
    switch( action.type ) {
        case 'SET_DETAILS':
            console.log('getting from saga:', action.payload);
            return action.payload;
        default:
            return state;
    }
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
