import React from 'react'
import { Link, NavLink } from "react-router-dom";
import styles from './Navigation.module.css'

const Navigation = () => {
    const setNavStyle = ({isActive}) => {
        return isActive
            ? styles['active-link']
            : undefined;
    }

  return (
    <nav>
        <ul>
            <li><NavLink className = {setNavStyle} to="/">Home</NavLink></li>
            <li><NavLink className = {setNavStyle} to="/about">About</NavLink></li>
            <li><NavLink className = {setNavStyle} to="/login">Login</NavLink></li>
            <li><NavLink className = {setNavStyle} to="/StarShips">StarShips</NavLink></li>
            <li><NavLink className = {setNavStyle} to="/StarShips/2">StarShips 2</NavLink></li>
            <li><NavLink className = {setNavStyle} to="/millennium-falcon">millennium-falcon</NavLink></li>
        </ul>

        <li>
            <NavLink
                to="/StarShips/2"
                // style={({isActive}) => ({
                //     background: isActive ? 'blue' : 'gray'
                // })}
                className = {setNavStyle}
            >
                StarShips
            </NavLink>
        </li>
    </nav>
  )
}

export default Navigation