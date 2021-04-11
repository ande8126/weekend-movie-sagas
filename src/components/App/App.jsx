import {HashRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import SiteRouter from '../SiteRouter/SiteRouter';
import Nav from '../Nav/Nav';
import { useSelector } from 'react-redux'

function App() {
  //MY ORIGINAL SELECTOR
  //REPLACING WITH NEW ONE IN DETAILS COMPONENT FOR STRETCH
//   const movie = useSelector(( store )=>{
//     return store.specificMovie;
// })


  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <SiteRouter />
    </div>
  );
}


export default App;
