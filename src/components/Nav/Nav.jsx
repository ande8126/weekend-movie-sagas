import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
                <Link to="/">Home</Link>
                <Link to="/list">List</Link>     
        </nav>
    )
}

export default Nav