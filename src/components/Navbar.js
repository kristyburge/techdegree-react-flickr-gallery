import React from 'react'; 
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="main-nav">
            <ul>
                <li><NavLink to='/cat'>Cats</NavLink></li>
                <li><NavLink to='/dog'>Dogs</NavLink></li>
                <li><NavLink to='/goat'>Goats</NavLink></li>
            </ul>
        </nav>
    ); 
}

export default Navbar; 