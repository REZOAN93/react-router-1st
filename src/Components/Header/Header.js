import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const navLinkStyles=({isActive})=>{
        return{
            fontWeight: isActive ?  'bold': 'normal',
            textDecoration: isActive ? 'none' : 'underline',
            color: isActive ? 'red':'black',
        }
    }
    return (
        <nav>
            <NavLink to="/home" style={navLinkStyles}>Home</NavLink>
            <NavLink to="/friends" style={navLinkStyles}>Friends</NavLink>
            <NavLink to="/about/" style={navLinkStyles}>About</NavLink>
            <NavLink to="/about/culture/" style={navLinkStyles}>Culture</NavLink>
        </nav>
    );
};

export default Header;