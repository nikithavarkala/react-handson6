import React from 'react'
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
<nav >
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/Student">Student</Link>
        <Link to="/Contact">Contact</Link>
</nav>
  )
}

export default Navbar;

