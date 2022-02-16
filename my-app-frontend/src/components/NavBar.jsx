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
            <NavLink activeClassName="nav_bar_burger" to="/" exact className="button" activeStyle={{ textDecoration: 'none' }}> All Cuisines </NavLink>
            </li>
            <li>
            <NavLink to="/favorites" exact className="button"> Favorites </NavLink>
            </li>
            <li>
            <NavLink to="/burger" exact className="button"
            activeStyle={{
              textDecoration: 'none'
              }}
            > Burgers </NavLink>
            </li>
            <li>
            <NavLink to="/pizza" exact className="button"> Pizzas </NavLink>
            </li>
            <li>
            <NavLink to="/ramen" exact className="button"> Ramen </NavLink>
            </li>
            <li>
            <NavLink to="/pastry" exact className="button"> Pastries </NavLink>
            </li>
            <li>
            <NavLink to="/taco" exact className="button"> Tacos </NavLink>
            </li>

         </ul>
        </div>

    </div>
  )
}

// export default NavBar;