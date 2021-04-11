import {HashRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import SiteRouter from '../SiteRouter/SiteRouter';
import Nav from '../Nav/Nav';
import { useSelector } from 'react-redux'

function App() {

  //NOT SURE I NEED THIS
  //props down to Gallery b/c its going to be a 'dumb' component
  //const movies = useSelector(store => store.movies);
  //props function to MovieList that opens /details -
  const movie = useSelector(( store )=>{
    return store.specificMovie;
})


  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <SiteRouter movie={movie} />
    </div>
  );
}


export default App;
