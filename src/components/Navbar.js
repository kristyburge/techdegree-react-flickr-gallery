import React from 'react'; 

const Navbar = () => {
    return (
        <nav className="main-nav">
            <ul>
                <li><a href='/'>Cats</a></li>
                <li><a href='/'>Dogs</a></li>
                <li><a href='/'>Computers</a></li>
            </ul>
        </nav>
    ); 
}

export default Navbar; 