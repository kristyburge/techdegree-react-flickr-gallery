import React, { Component } from 'react'; 
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
    
    handleClick = (e) => {
        e.preventDefault(); 
        const tag = e.target.innerText;
        
        // pass the tag up to App.js
        this.props.addTag(tag);
    }
    
    render() {
        return (
        <nav className="main-nav">
            <ul>
                <li onClick={this.handleClick}><NavLink to='/search/cats'>cats</NavLink></li>
                <li onClick={this.handleClick}><NavLink to='/search/dogs'>dogs</NavLink></li>
                <li onClick={this.handleClick}><NavLink to='/search/goats'>goats</NavLink></li>
            </ul>
        </nav>
        ); 
    }
}

export default Navbar; 