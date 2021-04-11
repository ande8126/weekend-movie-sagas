import React from 'react'
import { Link } from 'react-router-dom';
import './Nav.css'

const Nav = () => {
    return (
        <nav>
                <Link to="/">
                    <p>Home</p>
                </Link>
                <Link to="/list">
                    <p>List</p>
                </Link>     
        </nav>
    )
}

export default Nav
