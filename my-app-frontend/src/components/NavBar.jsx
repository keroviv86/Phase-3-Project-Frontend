import React from 'react'
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <div>
        <div className="nav_bar"> 
          Cuisines
          <ul>
            <NavLink to="/" exact className="button"> All Cuisines </NavLink>
            <li>
            <NavLink to="/burger" exact className="button"> Burgers </NavLink>
            </li>
            <li>
            <NavLink to="/pizza" exact className="button"> Pizza </NavLink>
            </li>
            <li>
            <NavLink to="/ramen" exact className="button"> Ramen </NavLink>
            </li>
            <li>
            <NavLink to="/pasteries" exact className="button"> Pastries </NavLink>
            </li>
         </ul>
        </div>

    </div>
  )
}

// export default NavBar;