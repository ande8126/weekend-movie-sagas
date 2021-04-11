import React from 'react'
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav'

const Home = () => {
    return (
        <section>
            <Link to="/add">
                <button>Add a movie</button>
            </Link>
            <Nav />
        </section>
    )
}

export default Home
