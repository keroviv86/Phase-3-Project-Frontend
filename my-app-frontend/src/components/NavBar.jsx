import React from 'react'
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  function show() {
    // document.getElementById('sidebar')
    console.log("hi")
    document.getElementById('sidebar').classList.toggle('active');
  }

  return (
    <div id="sidebar">
          <div class="toggle-btn" onClick={show}>
            <span></span>
            <span></span>
            <span></span>
          </div>
      
        <div className="nav_bar"> 
          <ul>
            <li>
            <NavLink activeClassName="nav_bar_burger" to="/" exact className="nav-link" activeStyle={{ textDecoration: 'none' }}> All Cuisines </NavLink>
            </li>
            <li>
            <NavLink to="/favorites" exact className="nav-link"> Favorites </NavLink>
            </li>
            <li>
            <NavLink to="/burger" exact className="nav-link"
            activeStyle={{
              textDecoration: 'none'
              }}
            > Burgers </NavLink>
            </li>
            <li>
            <NavLink to="/pizza" exact className="nav-link"> Pizzas </NavLink>
            </li>
            <li>
            <NavLink to="/ramen" exact className="nav-link"> Ramen </NavLink>
            </li>
            <li>
            <NavLink to="/pastry" exact className="nav-link"> Pastries </NavLink>
            </li>
            <li>
            <NavLink to="/taco" exact className="nav-link"> Tacos </NavLink>
            </li>

         </ul>
        </div>

    </div>
  )
}

// export default NavBar;