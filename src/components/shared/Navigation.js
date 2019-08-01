import React from 'react';
import {Link} from 'react-router-dom';

function Navigation() {
    return (
        <ul>
            <li><Link to="/">Movies Index</Link></li>
            <li><Link to="/details">Movies Details</Link></li>
            <li><Link to="/favorites">Favorites</Link></li>
        </ul>
    );
    
}

export default Navigation;