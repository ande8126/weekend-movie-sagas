import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList';
import Details from '../Details/Details';
import AddMovie from '../AddMovie/AddMovie';
import { useSelector } from 'react-redux'

function App() {

  //props down to Gallery b/c its going to be a 'dumb' component
  const movies = useSelector(store => store.movies);

  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>        
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route exact path="/details">
          {/* Details page */}
          <Details movies={movies}/>
        </Route>
        <Route exact path="/add">
          {/* Add Movie page */}
          <AddMovie />
        </Route>
      </Router>
    </div>
  );
}


export default App;
