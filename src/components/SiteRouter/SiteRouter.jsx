import {HashRouter as Router, Route} from 'react-router-dom';
import Home from '../Home/Home';
import MovieList from '../MovieList/MovieList';
import Details from '../Details/Details';
import AddMovie from '../AddMovie/AddMovie';
import Nav from '../Nav/Nav';

const SiteRouter = () => {
    return (
        <>
            <Router>  
                <Route exact path="/">
                    <Home />
                </Route>     
                <Route exact path="/list">
                    <MovieList />
                </Route>
                <Route exact path="/list/:id">
                    {/* Details page */}
                    <Details />
                </Route>
                <Route exact path="/add">
                    {/* Add Movie page */}
                    <AddMovie />
                </Route>
            </Router> 
        </>
    )
}

export default SiteRouter
