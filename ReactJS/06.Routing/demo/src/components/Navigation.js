import React from 'react'
import { Link } from "react-router-dom";


const Navigation = () => {
  return (
    <nav>
        <ul>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/login">Login</Link>
        </ul>
    </nav>
  )
}

export default Navigation