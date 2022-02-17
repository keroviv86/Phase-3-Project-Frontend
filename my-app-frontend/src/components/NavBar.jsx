import React from 'react'
import { NavLink } from 'react-router-dom';

export default function NavBar({handleClick}) {
  function show() {
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
            <NavLink activeClassName="nav_bar_burger" to="/foods" onClick={()=>handleClick('')} exact className="nav-link" activeStyle={{ textDecoration: 'none' }}> All Cuisines </NavLink>
            </li>
            <li>
            <NavLink to="/favorites" exact className="nav-link"> Favorites </NavLink>
            </li>
            <li>
            <NavLink to="/burger" exact className="nav-link" onClick={()=>handleClick('Burger')}> Burgers </NavLink>
            </li>
            <li>
            <NavLink to="/pizza" exact className="nav-link" onClick={()=>handleClick('Pizza')}> Pizzas </NavLink>
            </li>
            <li>
            <NavLink to="/ramen" exact className="nav-link" onClick={()=>handleClick('Ramen')}>  Ramen </NavLink>
            </li>
            <li>
            <NavLink to="/pastry" exact className="nav-link" onClick={()=>handleClick('Pastry')}>  Pastries </NavLink>
            </li>
            <li>
            <NavLink to="/taco" exact className="nav-link" onClick={()=>handleClick('Taco')}>  Tacos </NavLink>
            </li>

         </ul>
        </div>

    </div>
  )
}

// export default NavBar;